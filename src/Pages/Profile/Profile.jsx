import React from 'react';
import Header from '../../Component/Header/Header'
import './Profile.css'

function Profile() {
    const user = JSON.parse(localStorage.getItem('User'));
    return (
        <>
            <Header />
            <div className='contain'>
                <div className="container-fluid hei d-flex justify-content-center align-items-center">
                    <div className="shadow-lg w-25 bg-light rounded-3 p-3 some">
                        <p className="h2 text-center">
                            Profile
                        </p>
                        <hr />
                        <ul className="list-unstyled ps-3">
                            <li className="pt-3">
                                <p className="h5">
                                    Name : {user.name}
                                </p>
                            </li>
                            <li className="pt-3">
                                <p className="h5">
                                    Family name : {user.fname}
                                </p>
                            </li>
                            <li className="pt-3">
                                <p className="h5">
                                    Email : {user.Email}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;