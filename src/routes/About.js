import React from "react";
import "./About.css";

function About() {
  return (
    <section className='container'>
      <div>
        <h2>
          This web application has been made to provide the Ontario COVID-19
          information .
        </h2>
        <br />
        <h2>
          User can check the Today's COVID-19 new cases, total cases in the
          Ontario.
        </h2>
        <h2>
          Also, user can see the visualized total cases graph, and the table
          which shows all the total cases in the Canada
        </h2>
        <br />
        <h2>
          API Source :
          https://api.apify.com/v2/datasets/ji95MgtBVgGJF7XcP/items?format=json&clean=1
        </h2>
        <br />
        <h2>
          Create by :
          <a
            href='https://dev-eunjoo.github.io/'
            target='_blank'
            rel='noopener noreferrer'>
            Eunjoo Na{" "}
          </a>
        </h2>
      </div>
    </section>
  );
}

export default About;
