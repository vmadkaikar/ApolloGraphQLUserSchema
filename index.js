import 'graphql-import-node';
import { GraphQLModule } from '@graphql-modules/core';
import resolvers from './resolvers';
import * as typeDefs from './schema.graphql';

export const UserModule = new GraphQLModule({
    resolvers,
    typeDefs
});