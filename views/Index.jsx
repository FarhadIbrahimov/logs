import React from "react";

export default function Index({ logs }) {
  return (
    <div>
      <h1>Logs:</h1>
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
      <br />
      <form action="/logs/new">
        <button>Add New Log</button>
      </form>
      <br />
      <form action={"/logs/seed"} method="POST">
        <button>SEED</button>
      </form>
    </div>
  );
}
