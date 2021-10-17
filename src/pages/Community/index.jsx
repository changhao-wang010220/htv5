import React, { Component } from 'react'

export default class Community extends Component {
    state = {
        isLoading:true,
        err:''
    }

    render() {
        return (
            <h1>Community</h1>
            // <section className="text-dark bg-light pt-5">
            //     <div className="container">
            //         <div className="row">
            //             <div className="col col-lg-7 col-md-10 mx-auto">
            //                 <div className="article my-5">
            //                     <a href="/cleanBlog/pages/blog/blog.html" className="article-link text-decoration-none">
            //                         <h2 className="fw-bold fs-1">Man must explore, and this is exploration at its greatest</h2>
            //                         <h3 className="fw-light fs-3">Problems look mighty small from 150 miles up</h3>
            //                     </a>
            //                     <span>
            //                         Posted by Start Bootstrap on January 31, 2020 · 4 mins read
            //                     </span>
            //                 </div>
            //                 <hr/>
            //             </div>
            //         </div>
            //     </div>
            // </section>
        )
    }
}

