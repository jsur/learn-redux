import React from 'react';
import Photo from './Photo';
import Comments from './Comments';
// import comments

const Single = React.createClass({
  render() {

    const { postId } = this.props.params;
    // get index of post
    const i = this.props.posts.findIndex((post) => post.code === postId);
    // get post
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
});

export default Single;
