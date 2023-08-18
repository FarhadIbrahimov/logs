import React from "react";

function Error() {
  return (
    <div>
      <h1>Fields can not be empty, please fill it out</h1>
      <form action="/logs/new">
        <button>Back</button>
      </form>
    </div>
  );
}
export default Error;
