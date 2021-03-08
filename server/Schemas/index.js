const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
const professorData = require("../MOCK_DATA.json");

const ProfessorType = require("./TypeDefs/ProfessorType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllProfessors: {
      type: new GraphQLList(ProfessorType),
      args: { 
        id: { type: GraphQLInt } 
      },
      resolve(parent, args) {
        return professorData;
      },
    },
  },
});

// const Mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     createUser: {
//       type: UserType,
//       args: {
//         firstName: { type: GraphQLString },
//         lastName: { type: GraphQLString },
//         email: { type: GraphQLString },
//         password: { type: GraphQLString },
//       },
//       resolve(parent, args) {
//         userData.push({
//           id: userData.length + 1,
//           firstName: args.firstName,
//           lastName: args.lastName,
//           email: args.email,
//           password: args.password,
//         });
//         return args;
//       },
//     },
//   },
// });

// module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
module.exports = new GraphQLSchema({ query: RootQuery});