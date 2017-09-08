import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import Vote from './Vote';


class PostDetail extends Component {

  render() {
    const { posts, postId } = this.props;

    return (
      <div>{ posts ? posts.filter(p => {
        return p.id === postId }).map((post) => {
          return (
            <div key={post.id} className="text-left">
              <div className="card text-left">
                <div className="card-body">
                  <h4 className="card-title">{post.title}</h4>
                  <p className="card-text">{post.body}</p>

                  <Vote post={post}/>
                  <br />

                  <hr />
                  <i><p className="card-text">Author: {post.author}</p></i>

                  <a href="/edit" className="btn btn-primary">Edit</a>
                  <a href="/delete" className="btn btn-danger">Delete</a>
                </div>
              </div>
              <br />
              <h4>Comments</h4>
              {post.comments.map(comment => {
                return <Comment key={comment.id} comment={comment}/>
              })}
            </div>
          )
        })
        : ''}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.postData.posts
  }
}

export default connect(mapStateToProps)(PostDetail);