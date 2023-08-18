import React from "react";

function NewLayout(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <link rel="styles" href="/styles.css" />
      </head>
      <body>
        <nav style={{ display: "flex", flexDirection: "row" }}>
          <ul>
            <li>
              <a href="/logs">Logs</a>
            </li>
          </ul>
        </nav>
        {props.children}
      </body>
    </html>
  );
}
export default NewLayout;
