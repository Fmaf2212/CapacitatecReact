import React from 'react';
import LoginForm from '../forms/login-form';
import RegisterForm from '../forms/register-form';
import Link from 'next/link';

const SignInArea = () => {
  return (
        <section className="account-page-area section-gap-equal">
            <div className="container position-relative">
                <div className="row g-5 justify-content-center">
                    <div className="col-lg-5">
                        {/* <div className="login-form-box">
                            <h3 className="title">Iniciar sesión</h3>
                            <p>¿No tienes una cuenta? <Link href="/sign-up">Regístrate</Link></p>
                        </div> */}
                        <div className='login-form-box'>
                            <div className="text-center mb-[42px]">
                                <h3 className="text-[28px] leading-[40px] text-[#181818] font-spartan mb-0 font-bold">Iniciar sesión</h3>
                                <div className="text-[15px] leading-[24px] text-[#181818] mt-[5px]">
                                    <span className="note-for-non-account-user">¿No tienes una cuenta?</span>
                                    <Link href="/sign-up"><span className="text-[#1AB69D] cursor-pointer pl-1.5 hover:text-[#1b7a6a] transition-colors">Regístrate</span></Link>
                                </div>
                            </div>
                            <LoginForm/>
                        </div>
                    </div>
                </div>

                <ul className="shape-group">
                    <li className="shape-1 scene">
                        <img src="/assets/images/about/shape-07.png" alt="Shape" />
                    </li>
                    <li className="shape-2 scene">
                        <img src="/assets/images/about/shape-13.png" alt="Shape" />
                    </li>
                    <li className="shape-3 scene">
                        <img src="/assets/images/counterup/shape-02.png" alt="Shape" />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default SignInArea;