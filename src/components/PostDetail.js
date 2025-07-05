import styles from "./BlogViewer.module.css";

export default function PostDetail({ post }) {
  if (!post) {
    return <div className={styles.detail}>Select a post to read...</div>;
  }

  return (
    <div className={styles.detail}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
