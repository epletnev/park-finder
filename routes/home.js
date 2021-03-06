const db = require("../database/connection.js");
const layout = require("../layout.js");

function get(request, response) {
    db.query("SELECT * FROM users").then((result) => {
        const users = result.rows;
        let userList = "";
        for (const user of users) {
            const { id, username } = user;
            userList += `
        <li>
          <span>${username}</span>
          <form action="/users/delete/" method="POST" class="inline">
            <button name="id" value="${id}" aria-label="Delete ${username}">
              &times;
            </button>
          </form>
        </li>
      `;
        }
        const html = layout(
            "Park Finder",
            `
      <h2>Users</h2>
      <ul>${userList}</ul>
      <a href="/users/create"><button type="submit">Add Park</button></a>
      <a href="/users/parks"><button type="submit">View all parks</button></a>
    `
        );
        response.send(html);
    });
}

module.exports = {get };