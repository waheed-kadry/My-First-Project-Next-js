import Link from "next/link";
import React from "react";
import "./style.css"

function NavigationBar() {
  return (
    <nav className="navigation-bar">
     <ul>   <li>
        <Link href="/">
          <button>Home</button>
        </Link>
      </li>
     <li>
        <Link href="/posts">
          <button>Posts</button>
        </Link>
      </li>
      <li>
        <Link href="/articles">
          <button>Articles</button>
        </Link>
      </li>
   
     </ul>
    </nav>
  );
}

export default NavigationBar;
