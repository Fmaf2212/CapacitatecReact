import React from 'react';
import { useFormik } from 'formik';
import useFirebase from '../../hooks/use-firebase';
import { loginSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Swal from "sweetalert2";
import axios from "axios";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();
  // use firebase
  const { loginWithEmailPassword, resetPassword } = useFirebase();
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: async (values, { resetForm }) => {
      const { email, password } = values;
      let url = "https://apitest.yosoymitosis.com/v1/Access/ValidateLogin";
      try {
        const respuesta = await axios.post(
          url,
          { userName: email, password: password },
          { headers: { "Content-Type": "application/json", Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWl0b3NpekFwaSIsInBhc3N3b3JkIjoiQG1pdG9zaXo5NiIsImF1ZCI6IkZyb250Q2FwYWNpdGF0ZWMifQ.bRpwHDRVjqSYrYnDwXY2iySlEZdjkA3kHGtx7MTm8Ro` } }
        );

        if (respuesta.data.message === "Success") {
          localStorage.setItem("USER_AUTH", JSON.stringify(respuesta.data.data));
          // handleLogin();
          if (respuesta.data.data.typeClient === "User") {
            router.push("/");
          } else {
            window.location.href = "https://www.google.com";
          }
          // const getData = async () => {
          //   let url = "https://api.yosoymitosis.com/v1/User/GetUserProfile";
          //   try {
          //     const response = await axios.post(
          //       url,
          //       {
          //         userId: userId,
          //       },
          //       {
          //         headers: {
          //           "Content-Type": "application/json",
          //           Authorization: `Bearer ${BEARER_TOKEN}`,
          //         },
          //       }
          //     );
          //     const userData = {
          //       imageUrl: `https://api.yosoymitosis.com/StaticFiles/ProfileImg/${response.data.data.profilePicture}`,
          //       names: response.data.data.names,
          //       lastName: response.data.data.lastName,
          //     };
          //     setUserDataForAvatarDropdown(userData);
          //   } catch (error) {}
          // };
          // getData();
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Contraseña incorrecta. Por favor, inténtelo de nuevo.",
        });
      }
      resetForm();
    }
  })

  // handleResetPass
  const handleResetPass = (email) => {
    resetPassword(email);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          name="email"
          placeholder="Ingresar usuario"
        />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>

      <div className="form-group">
        <input
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type={showPass ? "text" : "password"}
          name="password"
          placeholder="Ingresar contraseña"
        />
        <span onClick={() => setShowPass(!showPass)} className="password-show">
          <i className="icon-76"></i>
        </span>
      </div>
      {touched.password && <ErrorMsg error={errors.password} />}

      <div className="form-group chekbox-area">
        <div className="edu-form-check">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Recuérdame</label>
        </div>
        <a href="#" onClick={() => handleResetPass(values.email)}
          className="password-reset">¿Olvidaste tu contraseña?</a>
      </div>

      <div className="form-group">
        <button type="submit" className="edu-btn btn-medium">Iniciar sesión <i className="icon-4"></i></button>
      </div>
    </form>
  )
}

export default LoginForm;