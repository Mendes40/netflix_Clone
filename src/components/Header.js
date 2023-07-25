import React from "react";
import "./Header.css";

export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://cdn.icon-icons.com/icons2/2619/PNG/256/among_us_netflix_icon_156927.png "
            alt="Usuário"
          />
        </a>
      </div>
    </header>
  );
};
