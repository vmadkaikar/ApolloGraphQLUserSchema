const _ = require('lodash');
let fakeDB = {
    users: []
};

module.exports = {
    Query: {
        users: () => fakeDB.users,
        user: ({id}) => _.find(fakeDB.users, {id}),
    }
};