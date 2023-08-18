import React from "react";

export default function Show({ log }) {
  let { title, entry, shipIsBroken, _id } = log;
  console.log(log._id);
  return (
    <div>
      <h1>Show</h1>
      <p>Title: {title}</p>
      <p>Entry: {entry}</p>
      <p> {shipIsBroken ? "Ship is broken" : "Ship is ready"}</p>
      <br />
      <a href="./">Back</a>
      <br />
      <form action={`/logs/${_id}?_method=DELETE`} method="POST">
        <button>Delete</button>
      </form>
    </div>
  );
}
