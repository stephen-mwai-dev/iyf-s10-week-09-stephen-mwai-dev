# Week 9: HubConnect - Multi-Page React Application

## Author
- **Name:** Stephen Mwai Dev
- **GitHub:** [@stephen-mwai-dev](https://github.com/stephen-mwai-dev)
- **Date:** April 22, 2026

## Project Description

**HubConnect** is a modern, multi-page community platform built with React and Vite. It demonstrates advanced React patterns including client-side routing, custom hooks, state management, and responsive design. The application allows developers to discover, share, and discuss topics in a collaborative space with features like post creation, liking, searching, and dark mode support.

This project showcases mastery of:
- React Router for multi-page navigation
- Custom hooks for reusable logic
- Data fetching and API integration
- Component composition and props
- LocalStorage persistence
- Responsive design principles

## Technologies Used

- **Frontend Framework:** React 18.2.0
- **Build Tool:** Vite 4.3.0
- **Routing:** React Router DOM 6.20.0
- **Styling:** CSS Modules
- **State Management:** React Hooks (useState, useEffect, useCallback)
- **Storage:** Browser LocalStorage API
- **API:** JSONPlaceholder (mock data)
- **Code Quality:** ESLint 9.39.4

## Features

### ✅ **Core Functionality**
- 🏠 **Home Page** - Welcome section with featured community posts and call-to-action buttons
- 📝 **Posts Feed** - Comprehensive list of all community posts with real-time search/filter
- ➕ **Create Post** - Form to compose and publish new posts to the community
- 👁️ **Post Detail View** - Full post page with expanded content and metadata
- ℹ️ **About Page** - Project information, mission, vision, and core values
- 📞 **Contact Page** - Contact form with social media links (X, LinkedIn, Discord, GitHub)
- 🚫 **404 Page** - Custom not-found page for invalid routes

### ✨ **User Experience Features**
- ❤️ **Like System** - Like/unlike posts with persistent like counts displayed as "X Likes"
- 🔍 **Search Posts** - Real-time search filtering by post title or content
- 🗑️ **Delete Own Posts** - Users can delete posts they created (not API posts)
- 🌙 **Dark Mode Toggle** - Switch between light and dark themes (persisted via localStorage)
- 📱 **Responsive Design** - Optimized for desktop (3-column grid), tablet (2-column), and mobile (1-column)
- 💾 **Data Persistence** - User-created posts, likes, and theme preference saved to localStorage

### 🔧 **Technical Highlights**
- Custom `useFetch` hook for clean API data fetching with loading/error states
- Custom `useLocalStorage` hook for seamless browser storage integration
- Custom `usePostLikes` hook for like count management and toggle logic
- Custom `useForm` hook for form state and validation handling
- CSS Modules for component-scoped styling (no global conflicts)
- African developer names display (Stephen Njuguna, Mercy Njeri, Wyclif Ochieng, Yahya Said, etc.)
- Responsive grid layout with CSS media queries

## How to Run

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation & Running

1. **Clone this repository**
   ```bash
   git clone https://github.com/stephen-mwai-dev/iyf-s10-week-09-stephen-mwai-dev.git
   cd iyf-s10-week-08-stephen-mwai-dev
Install dependencies

bash
npm install
Start the development server

bash
npm run dev
Open in your browser

The app will auto-open at http://localhost:5173
If not, manually navigate to that URL
Build for production (optional)

bash
npm run build
npm run preview
Project Structure
Code
src/
├── components/
│   ├── Layout/
│   │   ├── Header.jsx
│   │   ├── Header.module.css
│   │   ├── Footer.jsx
│   │   ├── Footer.module.css
│   │   ├── Layout.jsx
│   │   └── Layout.module.css
│   ├── Post/
│   │   ├── PostCard.jsx
│   │   ├── PostCard.module.css
│   │   ├── PostList.jsx
│   │   ├── PostList.module.css
│   │   ├── CreatePostForm.jsx
│   │   └── CreatePostForm.module.css
│   └── shared/
│       ├── Button/
│       ├── Input/
│       ├── Card/
│       ├── LoadingSpinner.jsx
│       └── ErrorMessage.jsx
├── hooks/
│   ├── useFetch.js
│   ├── useLocalStorage.js
│   ├── useToggle.js
│   ├── useForm.js
│   └── usePostLikes.js
├── pages/
│   ├── Home.jsx
│   ├── Posts.jsx
│   ├── PostDetail.jsx
│   ├── CreatePost.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── utils/
│   └── names.js
├── App.jsx
├── App.css
└── main.jsx
Lessons Learned
React & Hooks
Mastered functional components and React Hooks (useState, useEffect, useCallback, useContext)
Built custom hooks to abstract complex logic and promote code reusability
Understood dependency arrays and cleanup functions in useEffect
Routing & Navigation
Implemented client-side routing with React Router v6
Learned nested routes, route parameters, and navigation with useNavigate and useParams
Understood the Outlet component and layout wrapping patterns
State Management
Managed both local component state and global browser storage (localStorage)
Learned when to use useState vs. custom hooks vs. localStorage
Implemented controlled components for form inputs
API & Data Fetching
Integrated with JSONPlaceholder mock API
Handled loading, error, and success states gracefully
Learned to cancel fetch requests to prevent memory leaks
Styling & Responsive Design
Mastered CSS Modules for scoped styling without conflicts
Created responsive layouts using CSS Grid and Flexbox
Implemented dark mode using CSS variables and class toggling
Used media queries to optimize for mobile, tablet, and desktop
Component Architecture
Built reusable, composable components (Button, Input, Card, LoadingSpinner, ErrorMessage)
Practiced prop drilling and component composition
Created a consistent design system across the app
Developer Experience
Used Vite for fast development and optimized builds
Configured ESLint for code quality
Practiced Git workflows and meaningful commit messages
Challenges Faced
Challenge 1: Missing CSS Module Files
Problem: The app crashed with "Cannot find module" errors when PostList.module.css was missing.
Solution: Verified all component files have corresponding .module.css files. Created missing files using touch command.

Challenge 2: Like Count Logic
Problem: Initially, like counts weren't persisting and the toggle wasn't working correctly.
Solution: Created the usePostLikes hook to centralize like management, separate from post storage, and properly increment/decrement counts.

Challenge 3: Theme Toggle & Dark Mode
Problem: Dark mode CSS wasn't applying properly across all components.
Solution: Used CSS variables in :root and .dark-theme classes, then toggled the class on document.body using useEffect and localStorage.

Challenge 4: Responsive Grid Layout
Problem: The post grid didn't adapt well to mobile screens (too narrow, unreadable).
Solution: Updated PostList.module.css with media queries: 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile).

Challenge 5: Import/Export Errors
Problem: "Does not provide an export named 'default'" errors when component files were missing export default.
Solution: Ensured every component file ends with export default ComponentName; and verified all imports match exact file names.

Live Demo
🚀 View Live Demo (if deployed)

To deploy:

Build: npm run build
Deploy dist/ folder to Netlify, Vercel, or GitHub Pages