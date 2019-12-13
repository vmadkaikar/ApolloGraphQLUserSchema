require ('graphql-import-node');
const { GraphQLModule } = require( '@graphql-modules/core');
const resolvers= require( './resolver');
const typeDefs = require( './schema.graphql');

module.exports = {
    UserModule: new GraphQLModule({
        resolvers,
        typeDefs
    })
};