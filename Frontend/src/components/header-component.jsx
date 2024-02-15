import React from "react";

export default function Header({ links, page }) {
  const navigationItems = links.map((link, index) => (
    <li key={index}>
      <a
        href={link.url}
        className={`text-uppercase ${
          (page === "guest" && link.label === "register") ||
          (page === "register" && link.label === "login")
            ? "bg-white w-full"
            : "bg-base-100"
        } rounded menu-horizontal text-black-500 text-l  hover:text-sky-400`}
      >
        {link.label.toUpperCase()}
      </a>
    </li>
  ));

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">XXXX Dormitory</a>
      </div>
      <div className="flex-none">
        {page === "guest" || page === "register" ? (
          <ul className="menu menu-horizontal px-1 mx-2">{navigationItems}</ul>
        ) : page === "login" ? (
          ""
        ) : (
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Link</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  {navigationItems}
                </ul>
              </details>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
