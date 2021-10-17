import React, { Component } from 'react'
import Product from './Product'
import axios from 'axios'

export default class Market extends Component {
    state = {
        isLoading:true,
        // seedsList:[
        //     // {id:'001', price:10, name:'grass seed', store:'abc store', img:'https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg'},
        //     // {id:'002', price:20, name:'a seed', store:'abc store', img:'https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg'},
        //     // {id:'003', price:15, name:'b seed', store:'abc store', img:'https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg'},
        //     // {id:'004', price:12, name:'c seed', store:'abc store', img:'https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg'}
        // ],
        seedsList:[],
        err:''
    }

    componentDidMount() {
        axios.get('http://35.159.22.46:8000/marketplace/seeds/').then(
            response => {
                // console.log(response.data)
                this.setState({isLoading:false, seedsList:response.data})
            },
            error => {
                this.setState({isLoading:false, err:error})
            }
        );
        //this.setState({isLoading:false})
    }

    render() {
        const {isLoading, err, seedsList} = this.state;
        if(isLoading) {
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) 
        } else if(err) {
            return (
                <section className="p-5">
                    <div className="container">
                        <h1 className="text-danger">Currently the site is down, please try again later! :(</h1>
                    </div>
                </section>
            )
        } else {
            return (
                <section className="p-5 bg-light">
                    <div className="container">
                        <h2 className="text-center text-success">Our Market</h2>
                    </div>
                    <p className="lead text-center text-success mb-5">
                        A place to buy your inloved plants.
                    </p>
                    <div className="row g-4">
                        {seedsList.map(seed => {
                            return (<Product key={seed.id} {...seed}/>)
                        })}
                    </div>
                </section>
            )
        }
    }
}
