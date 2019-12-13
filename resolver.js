const _ = require('lodash');
let fakeDB = {
    users: []
};

export default {
    User: {
        id: () => {}
    },
    Query: {
        users: () => fakeDB.users,
        user: ({id}) => _.find(fakeDB.users, {id}),
    }
};