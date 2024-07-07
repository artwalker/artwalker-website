/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "../images/design-desk.jpeg";
import image from "../images/money-grow.jpg";

// const imageAltText = "desktop with books and laptop";
const imageAltText = "money grows";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  // {
  //   title: "10 Things To Know About Azure Static Web Apps 🎉",
  //   description:
  //     "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
  //   url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  // },
  {
    title: "My Blog World 🎉",
    description:
      "Welcome to my personal blog, where I dive into the exciting worlds of computer technology, explore the harmony of music, share savvy finance tips, and reflect on the joys of everyday life.",
    url: "https://artwalker.github.io/",
  },
  // {
  //   title: "Web Development for Beginners",
  //   description:
  //     "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
  //   url: "https://github.com/microsoft/web-dev-for-beginners",
  // },
  {
    title: "My Vlog World 🪀",
    description:
      "My YouTube channel chronicles my personal life, profound thoughts, explorations in computer technology, and the journey of teaching guitar and music.",
    url: "https://www.youtube.com/@ethanwang999",
  },
  {
    title: "My Resume World 🎯",
    description:
      "I mainly depict my personal growth experiences and development journey, believing that \"no one can define you; only you can define yourself\".",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  // {
  //   title: "GitHub Codespaces and github.dev",
  //   description:
  //     "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
  //   url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  // },
  {
    title: "My Career World 🏆",
    description:
      "I work in the computer industry, specializing in software development, while also being active in digital media, guitar, and music.",
    url: "https://www.linkedin.com/in/ethanwang999/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      {/* <h2 style={{ textAlign: "center" }}>Portfolio</h2> */}
      <h4 style={{ textAlign: "center" }}>Portfolio</h4>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
