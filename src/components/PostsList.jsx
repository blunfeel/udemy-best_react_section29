import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author='Iamohsung' body='React.js is awsome!' />
      <Post author='OhSung' body='Check ouit the full course!' />
    </ul>
  );
}

export default PostsList;
