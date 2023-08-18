import React from "react";
import NewLayout from "./layouts/NewLayout";

export default function New() {
  return (
    <NewLayout>
      <div>
        <h1>Ship Captain's New Log </h1>
        <form action="/logs" and method="POST">
          <label htmlFor="title">Title:</label>
          <input type="text" id="name" name="title" />
          <br />
          <br />
          <label htmlFor="entry">Entry:</label>
          <input type="text" name="entry" />
          <br />
          <br />
          <label htmlFor="shipIsBroken">BrokenShip:</label>
          <input type="checkbox" name="shipIsBroken" />
          <br />
          <br />
          <button>Submit</button>
          <br />
          <br />
          <a href="./">Back</a> <br />
        </form>
      </div>
    </NewLayout>
  );
}
