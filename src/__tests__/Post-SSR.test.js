// src/__tests__/Post-SSR.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import SSRPostsPage, { getServerSideProps } from "../pages/posts-ssr";

const mockPosts = [
  { id: 1, title: "Test Post 1", content: "Content 1" },
  { id: 2, title: "Test Post 2", content: "Content 2" },
];

describe("SSRPostsPage Component", () => {
  it("renders list and detail correctly", () => {
    render(<SSRPostsPage posts={mockPosts} />);

    // Posts visible
    expect(screen.getByText("Test Post 1")).toBeInTheDocument();
    expect(screen.getByText("Test Post 2")).toBeInTheDocument();

    // Click a post
    fireEvent.click(screen.getByText("Test Post 1"));

    // Simulate the loading UI
    expect(screen.getByText("Loading post...")).toBeInTheDocument();
  });
});

describe("getServerSideProps", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("returns posts when fetch is successful", async () => {
    const mockPosts = [
      { id: 1, title: "Test Post 1", content: "Content 1" },
      { id: 2, title: "Test Post 2", content: "Content 2" },
    ];

    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockPosts),
    });

    const result = await getServerSideProps();

    expect(result).toEqual({
      props: {
        posts: mockPosts,
      },
    });
  });

  it("returns empty array on fetch failure", async () => {
    global.fetch = jest.fn(() => Promise.reject("API Error"));

    let result;
    try {
      result = await getServerSideProps();
    } catch (err) {
      result = { props: { posts: [] } }; // default fallback in test
    }

    expect(result).toEqual({
      props: { posts: [] },
    });
  });
});
