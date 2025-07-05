import styles from "./BlogViewer.module.css";

export default function PostList({ posts, onPostClick, activePostId }) {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>Blog Viewer</h2>
      <ul className={styles.postList}>
        {posts?.length ? (
          posts.map((post) => (
            <li
              key={post.id}
              onClick={() => onPostClick(post)}
              className={`${styles.postItem} ${
                activePostId === post.id ? styles.activeItem : ""
              }`}
            >
              {post.title}
            </li>
          ))
        ) : (
          <li className={styles.noPosts}>No posts found.</li>
        )}
      </ul>
    </aside>
  );
}
