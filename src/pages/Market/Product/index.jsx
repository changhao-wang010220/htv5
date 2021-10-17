import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const {price, name, store, img} = this.props;
        return (
            <div className="col-md-6 col-lg-3">
                <div className="card">
                    <img src={img} className="card-img-top" alt='seed pic'/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{`$${price}`}</p>
                        <p className="card-text">{store}</p>
                        <a href="/" className="btn btn-success col-12">Purchase</a>
                    </div>
                </div>
            </div>
        )
    }
}
