// src/__tests__/PostList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import PostList from "../components/PostList";

describe("PostList Component", () => {
  const mockPosts = [
    { id: 1, title: "Post 1", content: "Content 1" },
    { id: 2, title: "Post 2", content: "Content 2" },
  ];

  it("renders list of posts correctly", () => {
    render(
      <PostList posts={mockPosts} onPostClick={() => {}} activePostId={null} />
    );
    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Post 2")).toBeInTheDocument();
  });

  it("calls onPostClick when a post is clicked", () => {
    const onPostClick = jest.fn();
    render(
      <PostList
        posts={mockPosts}
        onPostClick={onPostClick}
        activePostId={null}
      />
    );
    fireEvent.click(screen.getByText("Post 1"));
    expect(onPostClick).toHaveBeenCalledWith(mockPosts[0]);
  });

  it("renders 'No posts found.' if posts array is empty", () => {
    render(<PostList posts={[]} onPostClick={() => {}} activePostId={null} />);
    expect(screen.getByText("No posts found.")).toBeInTheDocument();
  });
});
