import React , {useEffect , useState} from "react";
import Header from "../../Component/Header/Header";
import Footer from '../../Component/Footer/Footer'
import Card from "../../Component/card/Card";
import { getproduct } from "../../services/services"
import './Main.css'
export default function Main() {
    const [cards , setcards] = useState([])
    useEffect(()=>{
            getproduct().then(
                response => setcards(
                    response.data.map((product) => {
                            return (
                             <Card 
                             key={product.id}
                             id={product.id}
                             source={product.imageaddress}
                             title={product.title}
                             explain={product.explain}
                             price={product.price}
                             />
                            )
                         })
                    
                ))
    },[])
        return (
            <>
                <Header />
                <div className="opacity-75 container-fluid image-background"></div>
                <main className="container mt-4">
                    <h1 className="text-sm-start text-center ">
                        Product
                    </h1>
                    <hr />
                    <div className="row gx-4">
                        <div className="col-sm-10 col-12 d-flex flex-wrap">
                            
                            {cards}    
                            
                        </div>
                        <div className="col-sm-2 d-none d-sm-block">
                            <div className="card widdecl mt-4">
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            checkbox 1
                                        </li>
                                        <li className="list-group-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            checkbox 2
                                        </li>
                                        <li className="list-group-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            checkbox 3
                                        </li>
                                        <li className="list-group-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            checkbox 4
                                        </li>
                                        <li className="list-group-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            checkbox 5
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn btn-outline-primary my-4 col-4 offset-4">
                                see more
                            </button>
                        </div>
                    </div >
                </main >
                <Footer />
            </>
        )
}