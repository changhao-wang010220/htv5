import React, { Component } from 'react'
import Post from './Post'
import Post_page from './Post_page'

export default class Community extends Component {
    state = {
        isLoading:true,
        postsList:[
            {id:'0001', date:'Oct 10th', title:'Title 1', article:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias dolores in enim neque eius.', author:'Joe', img:'https://images.dailyhive.com/20210216212643/Screen-Shot-2021-02-16-at-10-e1614017091763.jpg'},
            {id:'0002', date:'Oct 12th', title:'Title 2', article:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias dolores in enim neque eius.', author:'Charlie', img:'https://images.dailyhive.com/20210216212643/Screen-Shot-2021-02-16-at-10-e1614017091763.jpg'},
            {id:'0003', date:'Oct 11th', title:'Title 3', article:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias dolores in enim neque eius.', author:'Alex', img:'https://images.dailyhive.com/20210216212643/Screen-Shot-2021-02-16-at-10-e1614017091763.jpg'},
            {id:'0004', date:'Oct 15th', title:'Title 4', article:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias dolores in enim neque eius.', author:'Bob', img:'https://images.dailyhive.com/20210216212643/Screen-Shot-2021-02-16-at-10-e1614017091763.jpg'}
        ],
        err:'',
        tempPost:null
    }

    componentDidMount() {
        // axios.get('016e-102-109-74-175.ngrok.io/marketplace/seeds/').then(
        //     response => {
        //         this.setState({isLoading:false, postsList:response})
        //     },
        //     error => {
        //         this.setState({isLoading:false, err:error})
        //     }
        // );
        this.setState({isLoading:false})
    }

    getTempPost = (post) => {
        console.log(post)
        this.setState({tempPost:post})
    }

    render() {
        const {isLoading, err, postsList, tempPost} = this.state;
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
                <>
                <section className="p-5">
                    <div className="container">
                        <h2 className="text-center mb-4 text-success">
                            Community
                        </h2>
                        <p className="lead text-center text-success mb-5">
                            A place to share your plants growing.
                        </p>
                            {postsList.map(post => {
                                return (<Post key={post.id} {...post} post={post} getTempPost={this.getTempPost}/>)
                            })}
                    </div>
                </section>
                <Post_page post={tempPost}/>
                </>
            )
        }
    }
}

