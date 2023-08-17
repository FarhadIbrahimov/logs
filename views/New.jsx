import React from "react";

export default function New() {
  return (
    <div>
      <h1>Ship Captain </h1>

      <form action="/logs" and method="POST">
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" id="name" name="name"></input> <br />
        <label htmlFor="entry">Entry:</label>
        <br />
        <input type="textarea"></input>
        <br />
        <br />
        <label htmlFor="shipIsBroken">BrokenShip:</label>
        <input type="checkbox"></input>
        <br />
        <br />
        <br />
        <input type="submit">
          <button>Submit</button>
        </input>
      </form>
    </div>
  );
}
