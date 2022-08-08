import React from 'react';
import './Post.css'
function Post() {
    const poststyle = {
        width : '200px',
        height : '200px'
    }
    return (
        <>
            <article className="d-flex align-items-center">
                <div className="flex-shrink-0">
                    <img src={require('./blog1.jpg')} className="img-fluid declairsize rounded-2 d-none d-sm-block" alt="..." style={poststyle} />
                </div>
                <div className="flex-grow-1 ms-3 text-justify">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, iste non quibusdam eius dolorum
                    nobis consectetur quae repellendus nostrum officiis inventore tenetur, explicabo aliquam veniam
                    neque repudiandae. Est, optio omnis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam nihil alias minima, perspiciatis,
                    exercitationem vel quisquam numquam qui, iusto nesciunt et porro corporis labore rerum laborum
                    ducimus? Numquam, mollitia!<br />
                    <a href="#"> read more...</a>
                </div>
            </article>
            <hr />
        </>
    );
}

export default Post;