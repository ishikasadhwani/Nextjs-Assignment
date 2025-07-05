export default function handler(req, res) {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      content:
        "Next.js is a React framework that enables server-side rendering, static site generation, and full-stack capabilities out of the box. It's perfect for building fast and SEO-friendly web apps. Start by creating a project using `npx create-next-app` and explore file-based routing, API routes, and built-in CSS support.",
    },
    {
      id: 2,
      title: "Understanding Server-Side Rendering in Next.js",
      content:
        "Server-side rendering (SSR) in Next.js lets you pre-render a page on each request. This is useful for dynamic content that needs to be up-to-date. You can use `getServerSideProps()` to fetch data and render your page on the server before sending it to the client.",
    },
    {
      id: 3,
      title: "Static Site Generation with getStaticProps",
      content:
        "Next.js allows static site generation (SSG) using `getStaticProps()`. This method pre-renders pages at build time, offering incredible performance. It's best for content that doesn’t change often, like blogs or documentation. You can even use `getStaticPaths()` for dynamic routes.",
    },
    {
      id: 4,
      title: "API Routes in Next.js: Build Your Own Backend",
      content:
        "With API routes, Next.js gives you backend capabilities in your frontend project. You can create RESTful APIs inside the `pages/api/` directory without needing a separate server. This is perfect for handling form submissions, fetching data, or connecting to a database.",
    },
    {
      id: 5,
      title: "Optimizing Fonts and Images in Next.js",
      content:
        "Next.js has built-in support for optimized image loading and custom fonts. The `next/image` component automatically compresses images and delivers them in modern formats, while `next/font` provides control over loading strategies, improving page performance and user experience.",
    },
  ];

  res.status(200).json(posts);
}
