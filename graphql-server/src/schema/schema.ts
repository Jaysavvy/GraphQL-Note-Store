// import { createSchema } from 'graphql-yoga'
 
// export const schema = createSchema({
//   typeDefs: /* GraphQL */ `
//     type Query {
//       hello: String
//     }
//   `,
//   resolvers: {
//     Query: {
//       hello: () => 'world'
//     }
//   }
// })

import { builder } from "../builder";

import "../models/Message";
import "../models/User";

export const schema = builder.toSchema({})