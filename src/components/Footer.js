import React from "react";
import { Link } from "react-router-dom";

export default function Footer({ mode }) {
  return (
    <footer
      className={`text-center py-3 mt-4`}
      style={{
        backgroundColor: mode === "dark" ? "#042743" : "#f8f9fa",
        color: mode === "dark" ? "white" : "#333",
        borderTop: "1px solid",
        borderColor: mode === "dark" ? "gray" : "#ddd",
      }}
    >
      <div>
        <p className="mb-1">&copy; {new Date().getFullYear()} TextUtils</p>
        <p className="mb-0">
          Made with <span style={{ color: "red" }}>❤</span> by  codeWith harry
        </p>
        <p className="mb-0">
          <a
            href="https://github.com/yourusername"
            target="_blank"
           rel="noopener noreferrer"
            style={{ color: mode === "dark" ? "#0dcaf0" : "#007bff" }}
          >
            GitHub
          </a>{" "}
          |{" "}
          <Link
            to="/about"
            style={{ color: mode === "dark" ? "#0dcaf0" : "#007bff", textDecoration: "none" }}
          >
            Contact
          </Link>
        </p>
      </div>
    </footer>
  );
}
