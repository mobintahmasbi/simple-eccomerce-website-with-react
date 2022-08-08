import React from "react";
export default function Footer() {
    return (
        <>
            <div className="container-fluid bg-primary row justify-content-center d-sm-flex d-none" style={{ width: "100%", marginLeft: "0", marginRight: "0" }}>
                <div className="col-3">
                    <p className="h4 text-white text-center pt-4 pb-2 border-bottom border-white">
                        About us
                    </p>
                    <p className="text-justify text-white mt-3">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi omnis sunt labore, ad molestias molestiae
                        non sit fuga rem doloribus, porro aliquid tempore minus minima deserunt adipisci dignissimos laborum
                        earum.
                    </p>
                </div>
                <div className="col-3 ms-3">
                    <p className="h4 text-white text-center pt-4 pb-2 border-bottom border-white">
                        About us
                    </p>
                    <p className="text-justify text-white mt-3">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod impedit quidem numquam totam optio
                        voluptatem fuga expedita pariatur qui inventore, dicta, aliquam quos aperiam excepturi ipsa perspiciatis
                        quisquam nulla vero!
                    </p>
                </div>
                <div className="col-3 ms-3">
                    <p className="h4 text-white text-center pt-4 pb-2 border-bottom border-white">
                        About us
                    </p>
                    <p className="text-justify text-white mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt quas qui impedit harum
                        explicabo repellat laboriosam tenetur quis maiores nostrum placeat recusandae ea, nesciunt quo neque est
                        possimus corporis.
                    </p>
                </div>
            </div>
            <div className="row d-flex d-sm-none bg-primary justify-content-center text-white py-2">
                All rights reserved.
            </div>
        </>
    )
}