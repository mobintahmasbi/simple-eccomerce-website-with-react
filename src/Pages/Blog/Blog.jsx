import React from 'react';
import Header from '../../Component/Header/Header';
import Post from '../../Component/Post/Post';
import Footer from '../../Component/Footer/Footer'
import { useMediaQuery } from 'react-responsive';
import './Blog.css'
function Blog() {
    const posts = []
    for (let i = 0; i < 6; i++) {
        posts.push(<Post />)
    }
    const ismobile = useMediaQuery(
        { query: '(max-width : 576px)' }
    )
    let styleblog = {}
    if (ismobile) {
        styleblog = {
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: '165px'
        }
    }else{
        styleblog = {
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat',
            height: '350px'
        }
    }
        return (
            <>
                <Header />
                <div className="opacity-75 container-fluid image-background1" style={styleblog}></div>
                <main className='container mt-4'>
                    <h1 className="text-sm-start text-center ms-sm-3 opacity-75">
                        Blog
                    </h1>
                    <hr />
                    <section className="container-fluid mt-4">
                        {posts}
                    </section>
                </main>
                <Footer />
            </>
        );
}
export default Blog