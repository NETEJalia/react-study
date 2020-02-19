import React, {Component} from 'react';
import PostData from '../data/posts.json';

class PostList extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                {PostData.map((postDetail, index) => {
                    return (
                        <div>
                            <h2>{postDetail.title}</h2>
                            <p>{postDetail.content}</p>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default PostList;