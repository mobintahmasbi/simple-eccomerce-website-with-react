import React from 'react';
import { useMediaQuery } from 'react-responsive'

function Card(props) {
    const notmobile = useMediaQuery(
        { query: '(min-width : 576px' }
    )
    let responsivecard = {}
    if (notmobile) {
        responsivecard = {
            width: "32%"
        }
    }
    return (
        <>
            <div className="col-12 col-sm-3 text-dark wideclare me-2 mt-4" style={responsivecard}>
                <div className="card">
                    <img src={props.source}
                        className="card-img-top img-fluid" alt={props.title} />
                    <div className="card-body">
                        <div className="card-title">
                            <h5>
                                {props.title}
                            </h5>
                        </div>
                        <div className="card-text text-truncate">
                            {
                                props.explain
                            }
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <button className="btn btn-primary" onClick={() => {
                            window.location.assign(`http://localhost:3000/Products/${props.id}`) 
                        }}>
                            buy
                        </button>
                        <div className="text-dark fw-bold opacity-75">
                            {props.price}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;