import React from "react";

export default function About({ mode }) {
  const accordionStyle = {
    color: mode === "dark" ? "white" : "black",
    backgroundColor: mode === "dark" ? "#1a1a2e" : "white",
    border: mode === "dark" ? "1px solid white" : "1px solid #ddd",
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">About TextUtils</h1>
      <div className="accordion" id="aboutAccordion">
        {[
          {
            id: "One",
            title: "Features",
            body: (
              <ul>
                <li>Convert text to Uppercase & Lowercase</li>
                <li>Remove extra spaces instantly</li>
                <li>Count words & characters in real time</li>
                <li>Copy & Paste with one click</li>
                <li>Switch between Dark & Light mode</li>
              </ul>
            ),
          },
          {
            id: "Two",
            title: "Why Choose TextUtils?",
            body: "Lightweight, fast, customizable, and built for productivity. We make text handling faster, easier, and fun!",
          },
          {
            id: "Three",
            title: "About This Project",
            body: "Built with React + Bootstrap to demonstrate modern frontend practices. Responsive & theme-aware.",
          },
        ].map((item, index) => (
          <div className="accordion-item" style={accordionStyle} key={index}>
            <h2 className="accordion-header" id={`heading${item.id}`}>
              <button
                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${item.id}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse${item.id}`}
                style={accordionStyle}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={`collapse${item.id}`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              aria-labelledby={`heading${item.id}`}
              data-bs-parent="#aboutAccordion"
            >
              <div className="accordion-body">{item.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

