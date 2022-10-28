import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {Hosting, LazyLoading, Pagination, ReactHooks, ReactRouter, Topicslayout, Introduction, Auth, Familiar, Patterns, Setting, Wrap} from "./Components"
import {ErrorBoundary} from "./Components/ErrorBoundary"
import {Home, About, Topics, Users} from "./Pages"
import "./Styles/App.css"

export default function App() {
  return (
    <div className="body">
      <ErrorBoundary>
      <nav className="nav">
        <h1>ThinkDiff.</h1>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaYj-QSgEqxBDQj1IQFBhIClTWXnfu4K_2w&usqp=CAU" alt="Think Different"/>
        
        <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/users">Users</Link>
          </li>

          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        </div>
      </nav>

      <hr className="line"/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/topics" element={<Topicslayout />}> 
          <Route index element={<Topics />}/>
          <Route path="introduction" element={<Introduction />} />
          <Route path="setting" element={<Setting />} />
          <Route path="familiar" element={<Familiar />} />
          <Route path="react-hooks" element={<ReactHooks />} />
          <Route path="react-router" element={<ReactRouter />} />
          <Route path="pagination" element={<Pagination />} />
          <Route path="lazy-loading" element={<LazyLoading />} />
          <Route path="patterns" element={<Patterns />} />
          <Route path="hosting" element={<Hosting />} />
          <Route path="auth" element={<Auth />} />
          <Route path="wrap" element={<Wrap />} />
        </Route>
      </Routes>
      </ErrorBoundary>
    </div>
  );
}
