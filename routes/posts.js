const db = require("../database/connection.js");

function get(request, response) {
    const SELECT_POSTS = `
    SELECT parks.park, parks.location, users.username
    FROM parks INNER JOIN users
    ON parks.user_id = users.id
    ORDER BY parks.id DESC
  `;
    db.query(SELECT_POSTS).then((result) => {
        const parks = result.rows;
        let parkItems = "";
        for (let parks of parks) {
            parkItems += `
        <li>
         <p>${park.park}</p>
         <p>${park.location}</p>
         <p>${park.username}</p>
        </li>
      `;
        }
        response.send(`<ul>${parkItems}</ul>`);
    });
}

module.exports = {get };