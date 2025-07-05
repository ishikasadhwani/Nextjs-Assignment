"use client";
import Link from "next/link";
import "./globals.css";
export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #f8fbff, #e0ecff)",
        fontFamily: "'PT Serif', serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{ fontSize: "3rem", marginBottom: "1.5rem", color: "#1f2937" }}
      >
        Welcome to Blog Viewer
      </h1>

      <Link href="/posts-ssr">
        <button
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "8px",
            backgroundColor: "#3b82f6",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
        >
          View Blog Posts
        </button>
      </Link>
    </div>
  );
}
