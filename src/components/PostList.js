import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  const {comments, commentsLoading} = useSelector(state => state.post);

  return (
    <>
      {posts &&
        posts.length > 0 &&
        posts?.map(post => (
          <PostItem key={post?.id} post={post} loading={commentsLoading} comments={comments[post?.id]} />
        ))}
    </>
  );
};

export default memo(PostList);
