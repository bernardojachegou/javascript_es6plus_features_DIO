const eventEmitter = require('events');
// EventEmitter

const { EventEmitter } = require("events");

class Users extends EventEmitter {
    userLogged(data) {
        this.emit("User logged", data);
    }
}

const users = new Users();

// users.on("User logged", data => {
//     console.log(data);
// });

users.once("User logged", data => {
    console.log(data);
});

users.userLogged({ user: "Michel Bernardo" });
users.userLogged({ user: "Gabriel Silva" });
