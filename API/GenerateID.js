let ID = 0;

class GenerateID {
    static getID() {
        ID += 1;
        return ID;
    }
}

module.exports = GenerateID;