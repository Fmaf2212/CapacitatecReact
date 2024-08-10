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
      let url = "https://api.yosoymitosis.com/v1/Access/ValidateLogin";
      try {
        const respuesta = await axios.post(
          url,
          { userName: email, password: password },
          { headers: { "Content-Type": "application/json", Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWl0b3NpekFwaSIsInBhc3N3b3JkIjoiQG1pdG9zaXo5NiIsImF1ZCI6IkZyb250TWl0b3NpeiJ9.PjRxNwguwkC6I_Qtlo6XLy1686QFyU5L2QroleKQAX0` } }
        );

        if (respuesta.data.message === "Success") {
          localStorage.setItem("USER_AUTH", JSON.stringify(respuesta.data.data));
          // handleLogin();
          if (respuesta.data.data.typeClient === "User") {
            router.push("/");
          } else {
            window.location.href = "https://www.google.com";
          }
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
          placeholder="Ingresar usuario o correo electrónico"
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