import React from "react";

function Info() {
  return (
    <section className="info">
      <img className="info__img" src="/src/img/photo_swann.webp" />
      <h1 className="info__title">Swann Julien</h1>
      <h3 className="info__role">Frontend Developer</h3>
      <a className="info__web" href="https://swannjulien.com/" target="_blank">
        swannjulien.com
      </a>
      <button className="button button--email">
        <a href="mailto: swann.jn@gmail.com">
          {/* <span className="material-symbols-outlined">mail</span> */}
          <i class="fa-regular fa-envelope fa-lg"></i>
          <p>Email</p>
        </a>
      </button>
      <button className="button button--linkedIn">
        <a href="https://www.linkedin.com/in/swannjulien/" target="_blank">
          <i class="fa-brands fa-linkedin fa-lg"></i>
          <p>LinkedIn</p>
        </a>
      </button>
    </section>
  );
}

export default Info;
