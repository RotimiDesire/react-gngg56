import React from "react"
import {Link, Outlet} from "react-router-dom"
import "../Styles/TopicsLayout.css"

export default function TopicsLayout() {
  return (
    <div className="layout">
      <div className="links"> 
        <button>
          <Link to="/topics/introduction" className="btn-link">Introduction</Link>
        </button>

        <button>
          <Link to="/topics/setting" className="btn-link">Setting Up React</Link>
        </button>

        <button>
          <Link to="/topics/familiar" className="btn-link">Getting More Familiar with React</Link>
        </button>

        <button>
          <Link to="/topics/react-hooks" className="btn-link"> React Hooks</Link>
        </button>
        
        <button>
          <Link to="/topics/react-router" className="btn-link">React Router</Link>
        </button>

        <button>
          <Link to="/topics/pagination" className="btn-link">Pagination</Link>
        </button>
        
        <button>
          <Link to="/topics/lazy-loading" className="btn-link">Lazy Loading</Link>
        </button>

        <button>
          <Link to="/topics/patterns" className="btn-link">Architecture Patterns</Link>
        </button>

        <button>
          <Link to="/topics/hosting" className="btn-link">Hosting</Link>
        </button>
        
        <button>
          <Link to="/topics/auth" className="btn-link">Third Party Authentication</Link>
        </button>

        <button>
          <Link to="/topics/wrap" className="btn-link">Wrapping Up</Link>
        </button>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  )
}