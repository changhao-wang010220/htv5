import React, { Component } from 'react'
import './index.css'


export default class Post extends Component {
    getPost = (post) => {
        return () => {
            this.props.getTempPost(post)
        }
    }

    render() {
        const {date, author, title, article, image, post} = this.props;
        return (
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4" data-bs-target="#myModal" data-bs-toggle="modal" onClick={this.getPost(post)}>
                        <img src={image} className="img-fluid rounded-start" alt="post pic"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title" data-bs-target="#myModal" data-bs-toggle="modal" onClick={this.getPost(post)}>{title}</h5>
                            <p className="card-text" data-bs-target="#myModal" data-bs-toggle="modal" onClick={this.getPost(post)}>{article}</p>
                            <p className="card-text"><small className="text-muted">{`${date}, Posted by `}</small><a className='author'>{author}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

