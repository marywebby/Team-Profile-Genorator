const employee = require('./employee');

class manager extends employee {
    constructors(name, id, email, office) {
        // super(name, id, email);
        this.office = office;
    }

    getRole() {
        return manager
    }
}

module.exports = manager