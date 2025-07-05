import { useState } from "react";
import PostList from "../components/PostList";
import PostDetail from "../components/PostDetail";
import styles from "../components/BlogViewer.module.css";

export default function SSRPostsPage({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePostClick = (post) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedPost(post);
      setLoading(false);
    }, 500);
  };

  return (
    <div className={styles.container}>
      <PostList
        posts={posts}
        onPostClick={handlePostClick}
        activePostId={selectedPost?.id}
      />

      {loading ? (
        <div className={styles.detail}>
          <p style={{ color: "blue", fontStyle: "italic" }}>Loading post...</p>
        </div>
      ) : (
        <PostDetail post={selectedPost} />
      )}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/api/posts");
    const posts = await res.json();
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}
