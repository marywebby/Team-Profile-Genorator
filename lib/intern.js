const employee = require('./employee');

class intern extends employee {
    constructors(name, id, email, github) {
        // super(name, id, email);
        this.school = school;
    }

    getRole() {
        return intern
    }
}

module.exports = intern