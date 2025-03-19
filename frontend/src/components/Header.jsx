import React from 'react';

function Header() {
  return (
    <header>
      <h1>MChat</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/settings">Dashboard</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
