# 📖 Blog Viewer – Next.js + SSR

A blog viewer application built with **Next.js**, featuring **Server-Side Rendering (SSR)**, API routes, and component-level testing with **Jest** and **React Testing Library**.

---

## 📁 Routes Overview

This project uses **Next.js routing** to navigate between pages and display blog content dynamically. Here's a breakdown of all routes:

---

### `/` → **Home Page**

- ✨ Displays a welcome message.
- 📎 Contains a **"View Blog Posts"** button that redirects to `/posts-ssr`.
- 🗂️ Source File: `src/app/page.js`

---

### `/posts-ssr` → **Blog Viewer (Server Side Rendering)**

- ⚙️ Uses `getServerSideProps` for fetching data at request time.
- 📑 Shows:
  - Sidebar with list of blog post titles.
  - Post details when a title is clicked.
  - Loading animation while switching posts.
- 🗂️ Source File: `src/pages/posts-ssr.js`

---

### `/api/posts` → **API Route**

- 📦 Returns a **static list of blog posts** in JSON format.
- 🔗 Used by `getServerSideProps` for server-side data fetching.
- 🗂️ Source File: `src/pages/api/posts.js`

---

## 🔁 Example Flow

1. User lands on `/`
2. Clicks **“View Blog Posts”** → navigates to `/posts-ssr`
3. SSR fetches blog data from `/api/posts`
4. User clicks a post title → post content loads dynamically

---

## 🧪 Testing Overview

This project includes tests written using **Jest** and **React Testing Library**.

### ✔️ What’s Covered:

- `PostList` component
- `PostDetail` component
- `getServerSideProps` logic

📁 All test files are located in:  
`src/__tests__/`

### 🧪 Run Tests

```bash
npm test
# OR
npx jest
```

---

## 🧪 Test Coverage

This project uses **Jest** and **React Testing Library** to ensure component reliability and correctness.

### ✅ What’s Tested:

| Component/File | Description                                             |
| -------------- | ------------------------------------------------------- |
| `PostList`     | Verifies rendering of post list and click interactions  |
| `PostDetail`   | Checks rendering based on selected post                 |
| `posts-ssr.js` | Unit tests for `getServerSideProps` success and failure |

### 🧪 Run Tests with coverage

```bash
npx jest --coverage
```

---

## ⚙️ Project Setup

Follow these steps to run the Blog Viewer project locally:

### 1. 📦 Clone the Repository

```bash
git clone https://github.com/ishikasadhwani/Nextjs-Assignment.git
cd blog-viewer
```

### 📦 Install Dependencies

```bash
npm install

```

### 🚀 Start Development Server

To start the development server, run:

```bash
npm run dev
```

### 🌐 Open in Browser

Open your browser and go to:

```bash
http://localhost:3000
```

---

### 📌 Tech Stack

- ⚛️ **React / Next.js** – Framework for building the UI and server-side rendering.
- 🎨 **CSS Modules** – Scoped styling for components.
- 🧪 **Jest + React Testing Library** – For unit testing components.

---

### 👩‍💻 Author

**Ishika Sadhwani**  
🎓 B.Tech CSE  
🐙 GitHub: [@ishikasadhwani](https://github.com/ishikasadhwani)  
📧 Email: ishikasadhwani.tech@gmail.com
