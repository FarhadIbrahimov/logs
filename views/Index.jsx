import React from "react";

export default function Index({ logs }) {
  return (
    <div>
      <h1>Index</h1>
      {logs.map((log) => {
        return (
          <div key={log._id}>
            <h1>{log.title}</h1>
            <a href={`/logs/${log._id}`}>Details</a>
            <p>{log.entry}</p>
            <p>{log.shipIsBroken}</p>
          </div>
        );
      })}
    </div>
  );
}
