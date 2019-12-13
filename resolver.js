const _ = require('lodash');
let fakeDB = {
    users: []
};

module.exports = {
    Query: {
        users: () => fakeDB.users,
        user: ({id}) => _.find(fakeDB.users, {id}),
    },
    Mutation: {
        addUser: ({user}) => {
            fakeDB.users.push(user);
            return {
                success: true
            };
        },
        updateUser: ({user}) => {
            let oUser = _.find(fakeDB.users, {id: user.id});
            if (oUser) {
                oUser.fName = user.fName;
                oUser.lName = user.lName;
                oUser.dob = user.dob;
                return {
                    success: true
                };
            } else {
                return {
                    success: false
                };
            }
        }
    }
};