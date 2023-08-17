import React from "react";

export default function New() {
  return (
    <div>
      <h1>Ship Captain </h1>

      <form action="/logs" and method="POST">
        <label htmlFor="title">Title:</label>
        <input type="text" id="name" name="name" />
        <br />
        <br />
        <label htmlFor="entry">Entry:</label>
        <input type="textarea" />
        <br />
        <br />
        <label htmlFor="shipIsBroken">BrokenShip:</label>
        <input type="checkbox" />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
