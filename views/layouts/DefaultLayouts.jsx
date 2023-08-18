import React from "react";

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <nav style={{ display: "flex", flexDirection: "row" }}>
          <ul>
            <li>
              <a href="/logs">Logs</a>
            </li>
            <li>
              <a href="/logs/new">Create New Log</a>
            </li>
          </ul>
        </nav>
        {props.children}
      </body>
    </html>
  );
}
export default DefaultLayout;
