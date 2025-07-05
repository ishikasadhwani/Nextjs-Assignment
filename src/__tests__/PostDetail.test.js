import { render, screen } from "@testing-library/react";
import PostDetail from "../components/PostDetail";

describe("PostDetail Component", () => {
  it("renders post title and content when post is available", () => {
    const mockPost = {
      id: 1,
      title: "Test Title",
      content: "Test Content",
    };
    render(<PostDetail post={mockPost} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("renders fallback message when post is null", () => {
    render(<PostDetail post={null} />);
    expect(screen.getByText("Select a post to read...")).toBeInTheDocument();
  });
});
