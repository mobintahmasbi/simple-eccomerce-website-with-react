import React from 'react';
import Header from '../../Component/Header/Header';
import Basketrow from '../../Component/Baketrow/Basketrow';
import './Basket.css'

function Basket() {
    const user = JSON.parse(localStorage.getItem('User'))
    let totalprice = 0;
    let counter = 0;
    const rows = user.Buy.map((item) => {
        counter++;
        totalprice = totalprice + item.Count * item.Price;
        return (<Basketrow
            key={counter}
            id={counter}
            title={item.Product}
            count={item.Count}
            price={item.Price}
        />)
    })
    function pay(){
        user.Buy = [];
        localStorage.setItem('User' , JSON.stringify(user))
        window.location.reload();
    }
    return (
        <>
            <Header />
            <div className="contain">
                <div className="container-fluid row d-flex hei">
                    <div className="col-sm-8 offset-sm-2 align-self-center bg-light rounded-3 p-3 shadow-lg">
                        <p className="h2">
                            shop basket
                        </p>
                        <hr />
                        <div className="row">
                            <div className="col-sm-8 col-12">
                                <table className="table table-striped">
                                    <thead className="text-center">
                                        <tr>
                                            <th scope="col">
                                                #
                                            </th>
                                            <th scope="col">
                                                Product name
                                            </th>
                                            <th scope="col">
                                                count
                                            </th>
                                            <th scope="col">
                                                Price
                                            </th>
                                            <th scope="col">
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        {rows}
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-sm-4 col-12 border border-2 rounded-3">
                                <p className="h4 mt-2 text-center">
                                    Payment
                                </p>
                                <hr />
                                <div>
                                    Total Price : {totalprice}.00$
                                </div>
                                <hr />
                                <div className="d-flex justify-content-start mb-3">
                                    <div className="form-check me-3">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Pypal
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Payeer
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-success w-100 mb-3" onClick={pay}>
                                    Payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Basket;