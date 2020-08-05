import React, { Component } from 'react';
import Post from './Post';

class Content extends Component {
    constructor() {
        super();
        this.state={
            title: []
        };
    }
    componentDidMount() {
        fetch('https://jsonstorage.net/api/items/f2c563c1-bff6-469b-a954-0dab52edc4c3')
            .then(posts => {
                return posts.json();
            }).then(data => {
                let title=data.posts;
                this.setState({ title: title });
            })

    }
    render() {
        return (
            <>
                <button
                    onClick={() => {
                        console.log("button clicked");
                    }}
                >Refresh</button>
                    <button onClick={() => {
                    console.log("button clicked");
                }}>Translate Button</button>
                
                <div className="container1">
                    {this.state.title.map((pic) => {

                        return (
                            <Post postData={pic} />
                        )


                    }
                    )}
                </div>
            </>
        )
    }
}
export default Content;

