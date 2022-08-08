import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Component/Header/Header'
import { login } from '../../services/services';
import './Login.css'
const styleback = {
    background: "rgb(4, 91, 247)",
    background: "linear-gradient(90deg, rgba(4, 91, 247, 1) 0%, rgba(48, 166, 210, 0.9587185215883228) 100%)",
    position: "absolute",
    zIndex: "-1000",
    width: "100%",
    height: "calc(100vh - 56px)"
}
function Login() {
    const [err, seterr] = useState()
    const inputEmail = useRef()
    const inputPassword = useRef()
    function handlelogin() {
        login(inputEmail.current.value).then(response => {
            const user = response.data[0]
            if (user !== undefined) {
                if (user.Password === inputPassword.current.value) {
                    localStorage.setItem('User' , JSON.stringify(user))
                    window.location.assign('http://localhost:3000')
                } else {
                    seterr('Password');
                }
            } else {
                seterr('Email');
            }
        })
    }
    return (
        <>
            <Header />
            <div className='containal' style={styleback}>
                <div className="container-fluid row hei">
                    <div className="col-sm-4 offset-sm-4 col-12 bg-light align-self-center p-4 rounded-3 shadow-lg">
                        <h3 className="text-center"> Login </h3>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput" className="form-label">Email address</label>
                            <input ref={inputEmail} type="email" className={err === "Email" ? 'form-control is-invalid' : 'form-control'} id="exampleFormControlInput" placeholder="name@example.com" />
                            <div className='invalid-feedback'>
                                Email is not correct
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                            <input ref={inputPassword} type="password" className={err === "Password" ? 'form-control is-invalid' : 'form-control'} id="exampleFormControlInput1" placeholder="Enter password" />
                            <div className='invalid-feedback'>
                                Password is not correct
                            </div>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary w-100" onClick={handlelogin}>
                                Login
                            </button>
                        </div>
                        <div className="text-center">
                            <Link to='../Register'>Don't have account ? signup </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;