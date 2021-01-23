import React, { useEffect, useRef, useState } from "react";
import Link from "./link";
import Logo from "../../../public/logo.svg";
import Toggle from "../../../public/toggle.svg";
import Button from "../Button/Button";

export default function Nav({ current }) {
  const [isScreenNarrow, setIsScreenNarrow] = useState(true);
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  useEffect(() => {
    setIsScreenNarrow(matchMedia("(max-width: 768px)").matches);
    if (localStorage.getItem("theme") === "theme") {
      document
        .querySelector(".nav__themeToggler")
        .classList.add("nav__themeToggler--dark");
    }
  }, []);

  return (
    <nav className="nav">
      <div className="nav__wrap">
        <Link to="/">
          <Logo className="nav__logo" />
        </Link>

        <div className="nav__togglers">
          <div
            className="nav__theme"
            role="button"
            tabIndex="0"
            onClick={() => themeToggleHandler()}
            onKeyUp={(e) => themeToggleHandler(e)}
          >
            <Toggle className="nav__themeToggler" title="Dark Mode Toggler" />
            <small>Dark Mode</small>
          </div>

          {isScreenNarrow ? (
            <div
              role="button"
              tabIndex="0"
              className="nav__hamburger"
              onClick={() => hamBurgerClickHandler()}
              onKeyUp={(e) => hamBurgerClickHandler(e)}
            >
              <span
                className={
                  isHamburgerClicked
                    ? "nav__hamburgerToggler nav__hamburgerToggler--active"
                    : "nav__hamburgerToggler"
                }
              ></span>
              <small>Menu</small>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={
            isHamburgerClicked ? "nav__links nav__links--active" : "nav__links"
          }
        >
          <Link
            to="/about"
            textContent="About"
            isActive={current === "about" ? true : false}
          />
          <Link
            to="/projects"
            textContent="Projects"
            isActive={current === "projects" ? true : false}
          />
          <Link
            to="/resume"
            textContent="Resume"
            isActive={current === "resume" ? true : false}
          />
          <Link
            to="/blogs"
            textContent="Blogs"
            isActive={current === "blogs" ? true : false}
          />
        </div>
      </div>
    </nav>
  );

  function hamBurgerClickHandler(e) {
    if (e) {
      switch (e.key) {
        case "Enter":
          setIsHamburgerClicked(true);
          break;
        case "Escape":
          setIsHamburgerClicked(false);
          break;
      }
    } else {
      isHamburgerClicked
        ? setIsHamburgerClicked(false)
        : setIsHamburgerClicked(true);
    }
  }

  function themeToggleHandler(e) {
    const theme = localStorage.getItem("theme");
    if ((e && e.key === "Enter") || !e) {
      theme
        ? localStorage.removeItem("theme")
        : localStorage.setItem("theme", "dark");
      document
        .querySelector(".nav__themeToggler")
        .classList.toggle("nav__themeToggler--dark");
      document.documentElement.classList.toggle("dark");
    }
  }
}
