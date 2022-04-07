import React from 'react';
import P from  'prop-types'
import {PostCard} from '../PostCard';
import './styles.css'

export const Posts = ({posts = [] }) => {
  return (
    <div className="posts">
      {posts.map(post => (
        <PostCard
          key={post.id}
          cover={post.cover}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  )
}

Posts.defaultProps = {
  posts: []
}

Posts.propTypes = {
  posts: P.array
}
