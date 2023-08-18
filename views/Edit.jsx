import React from "react";

export default function Edit({ log }) {
  let { title, entry, shipIsBroken, _id } = log;
  //   console.log(log);
  return (
    <div>
      <h1>Edit Log</h1>

      <form action={`/logs/${_id}?_method=PUT`} method="POST">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={title} />
        <br />
        <br />
        <label htmlFor="entry">Entry:</label>
        <input type="text" id="entry " name="entry" value={entry} />
        <br />
        <br />
        <label htmlFor="shipIsBroken">BrokenShip:</label>
        <input
          type="checkbox"
          id="shipIsBroken"
          name="shipIsBroken"
          value={shipIsBroken}
          checked={shipIsBroken}
        />
        <br />
        <br />
        <button>Update</button>
      </form>
      <br />
      <a href={`/logs/${_id}`}>Back</a>
    </div>
  );
}
