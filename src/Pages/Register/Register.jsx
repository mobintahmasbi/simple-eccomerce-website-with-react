import React, { useRef, useState, useEffect } from 'react'
import Header from '../../Component/Header/Header'
import { getalluser, Register } from '../../services/services'
import { Link } from 'react-router-dom'

function Rgister() {
    const Name = useRef()
    const Fname = useRef()
    const Email = useRef()
    const Password = useRef()
    const RepeatPassword = useRef()
    const [err, seterr] = useState()
    let users = []
    useEffect(() => {
        getalluser().then(res => {
            users = res.data
        })
    }, [])
    function handleblur() {
        const email = Email.current.value
        let  dicider = ''
        users.forEach(user => {
            if (email === user.Email) {
                dicider = 'takenEmail'
            }
        })
        seterr(dicider)
    }
    function handleRegister() {
        if (Password.current.value !== RepeatPassword.current.value) {
            seterr('Password')
        } else {
            let id = users.length + 1
            Register(id, Name.current.value, Fname.current.value, Email.current.value, Password.current.value)
            .then(() => {
                window.location.assign('http://localhost:3000/Login')
            })
        }
    }
    const styleback = {
        background: "rgb(4, 91, 247)",
        background: "linear-gradient(90deg, rgba(4, 91, 247, 1) 0%, rgba(48, 166, 210, 0.9587185215883228) 100%)",
        position: "absolute",
        zIndex: "-1000",
        width: "100%",
        height: "calc(100vh - 56px)"
    }
    return (
        <>
            <Header />
            <div style={styleback}>
                <div className="container-fluid row hei">
                    <div className="col-sm-4 offset-sm-4 col-12 bg-light align-self-center p-4 rounded-3 shadow-lg">
                        <h3 className="text-center mb-3">
                            Register
                        </h3>
                        <div className="row">
                            <div className="mb-3 col-6">
                                <label htmlFor="exampleFormControlInput1" className="form-label">name</label>
                                <input ref={Name} type="text" className="form-control" id="exampleFormControlInput1"
                                    placeholder="name" />
                            </div>
                            <div className="mb-3 col-6">
                                <label htmlFor="exampleFormControlInput2" className="form-label">family name</label>
                                <input ref={Fname} type="text" className="form-control" id="exampleFormControlInput2"
                                    placeholder="family name" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input ref={Email} type="email" className={err === "takenEmail" || err === 'Email' ? 'form-control is-invalid' : 'form-control'} id="exampleFormControlInput1" placeholder="name@example.com" onBlur={handleblur} />
                            <div className='invalid-feedback'>
                                {err === 'takenEmail' ? 'Email already exist' : 'Email is wrong'}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                            <input ref={Password} type="password" className={err === 'Password' ? 'form-control is-invalid' : 'form-control'} id="exampleFormControlInput1" placeholder="Enter password" />
                            <div className='invalid-feedback'>
                                Passwords aren't equal
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Repeat password</label>
                            <input ref={RepeatPassword} type="password" className={err === 'Password' ? 'form-control is-invalid' : 'form-control'} id="exampleFormControlInput1" placeholder="Enter password" />
                            <div className='invalid-feedback'>
                                Passwords aren't equal
                            </div>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary w-100" onClick={handleRegister}>
                                Register
                            </button>
                        </div>
                        <div className="text-center">
                            <Link to="../Login">Do you have account? Login </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rgister

