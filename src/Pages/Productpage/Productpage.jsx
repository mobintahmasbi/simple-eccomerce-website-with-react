import './productpage.css'
import React, { useState, useEffect } from 'react';
import { getProductbyid } from '../../services/services'
import Header from '../../Component/Header/Header';
function Productpage() {
    const styleback = {
        background: "rgb(4, 91, 247)",
        background: "linear-gradient(90deg, rgba(4, 91, 247, 1) 0%, rgba(48, 166, 210, 0.9587185215883228) 100%)",
        position: "absolute",
        zIndex: "-1000",
        width: "100%",
        height: '730px'
    }
    function addtobasket() {
        const user = JSON.parse(localStorage.getItem('User'))
        if (user) {
            user['Buy'].push(
                {
                    Count: count,
                    Product: product.name,
                    Price : product.price
                }
            )
            localStorage.setItem('User' , JSON.stringify(user))
            window.location.reload()
        }else{
            window.location.assign('http://localhost:3000/Login')
        }
    }
    const [count, setcount] = useState(0);
    const [product, setproduct] = useState({})
    useEffect(() => {
        getProductbyid(window.location.pathname.split('/')[2]).then(res => {
            const data = res.data
            setproduct({
                name: data.title,
                detail: data.explain,
                sourceimg: data.imageaddress,
                price: data.price
            })
        })
    }, [])
    return (
        <>
            <div className='containall' style={styleback}>
                <Header />
                <div className="container-fluid row hei mt-3 central">
                    <div className="col-sm-8 col-12 offset-sm-2 align-self-center bg-light p-4 shadow-lg rounded-3">
                        <div className="container-fluid row">
                            <div className="col-sm-6 col-12">
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <img src={`http://localhost:3000/${product.sourceimg}`} alt="afdf" className="img-fluid" />
                                    </div>
                                    <div className="col-3">
                                        <img src={`http://localhost:3000/${product.sourceimg}`} alt="afdf"
                                            className="img-fluid rounded-3 border border-primary" />
                                    </div>
                                    <div className="col-3">
                                        <img src={`http://localhost:3000/${product.sourceimg}`} alt="afdf"
                                            className="img-fluid rounded-3 border border-primary" />
                                    </div>
                                    <div className="col-3">
                                        <img src={`http://localhost:3000/${product.sourceimg}`} alt="afdf"
                                            className="img-fluid rounded-3 border border-primary" />
                                    </div>
                                    <div className="col-3">
                                        <img src={`http://localhost:3000/${product.sourceimg}`} alt="afdf"
                                            className="img-fluid rounded-3 border border-primary" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-12">
                                <h2 className="text-center mt-2"> {product.name} </h2>
                                <hr />
                                <p className="text-justify d-block mt-5">
                                    {product.detail}
                                </p>
                                <p className="text-justify d-block mt-5">
                                    {product.detail}
                                </p>
                                <div className="d-flex flex-sm-row flex-column justify-content-sm-between mt-5">
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-primary" onClick={() => {
                                            if (count !== 0) {
                                                setcount(count - 1);
                                            }
                                        }}>-</button>
                                        <button type="button" className="btn btn-outline-primary" disabled> {count} </button>
                                        <button type="button" className="btn btn-primary" onClick={() => setcount(count + 1)}>+</button>
                                    </div>
                                    <button type="button" className="btn btn-primary d-flex align-items-center w-50 justify-content-center mt-2 decwi"
                                        onClick={addtobasket}
                                    >
                                        Add to basket <i className="material-icons ms-2">shopping_cart</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Productpage;