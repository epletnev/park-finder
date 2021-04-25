const db = require("../database/connection.js");
const layout = require("../layout.js");

function get(request, response) {
    const html = layout(
        "Create park",
        `
    <form method="POST">
      <p>
        <label for="username">Username</label>
        <input id="username" name="username">
      </p>
      <p>
        <label for="park">Park</label>
        <input id="park" name="park">
      </p>
      <p>
        <label for="location">Location</label>
        <input id="location" name="location">
      </p>
      <p>
        <button type="submit">Create Park</button>
      </p>
    </form>
  `
    );
    response.send(html);
}

function post(request, response) {
    const data = request.body;
    const values = Object.values(data);
    db.query(
        "INSERT INTO users(username) VALUES($1)",
        "INSERT INTO parks(park, location) VALUES($2, $3)",
        values
    ).then(() => {
        response.redirect("/");
    });
}

module.exports = {get, post };