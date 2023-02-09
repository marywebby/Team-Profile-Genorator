const employee = require('./employee');

class engineer extends employee {
    constructors(name, id, email, github) {
        // super(name, id, email);
        this.github = github;
    }

    getRole() {
        return engineer
    }
}

module.exports = engineer