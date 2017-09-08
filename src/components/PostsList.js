import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Post from './Post';

class PostsList extends Component {
  componentDidUpdate() {
    actions.getComments(this.props.posts);
  }

  render() {
    const { posts, category } = this.props;

    return (
      <div>
        <div>
          <h3>Posts</h3>
          <hr />
          {posts && category ? posts.filter(post =>
            {return post.category === category}).map((post) =>
              <Post key={post.id} post={post} />) : posts ? posts.map((post) =>
                <Post key={post.id} post={post} />) : <h4>There are no Post for { category } at this time.</h4>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.postData.posts
  }
}

export default connect(mapStateToProps, actions)(PostsList);
