// Not Working( Need to be solved )

"use client";

import { useEffect } from "react";

export default function Navigation() {
  useEffect(() => {
    const navbarContainer = document.querySelector(".navbar-container") as HTMLElement;
    const glow = document.querySelector(".cursor-glow") as HTMLElement;

    if (navbarContainer && glow) {
      navbarContainer.addEventListener("mousemove", (e) => {
        const rect = navbarContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
      });
    }
  }, []);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="cursor-glow"></div>
          <div className="logo">GSM</div>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="hide-on-mobile">
              <a href="#">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
          </ul>
          <a
            href="https://wa.me/7559974470"
            target="_blank"
            rel="noopener noreferrer"
            className="quote-btn"
          >
            Get a Quote
          </a>
        </div>
      </nav>
    </header>
  );
};

