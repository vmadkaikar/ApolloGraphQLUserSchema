const _ = require('lodash');
const fakeDB = {
    users: []
};

module.exports = {
    Query: {
        users: () => fakeDB.users,
        user: (root, {id}) => _.find(fakeDB.users, {id}),
    },
    Mutation: {
        addUser: (root, {user}) => {
            fakeDB.users.push(user);
            return {
                success: true
            };
        },
        updateUser: (root, {user}) => {
            let oUser = _.find(fakeDB.users, {id: user.id});
            if (oUser) {
                oUser = {...oUser, ...user};
                return {success: true};
            }
            return {success: false};
        }
    }
};