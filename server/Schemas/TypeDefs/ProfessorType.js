const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const ProfessorType = new GraphQLObjectType({
  name: "Professor",
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    School: { type: GraphQLString },
    Name: { type: GraphQLString},
    Graduated_student: { type: GraphQLInt },
    Y1: { type: GraphQLInt},
    Y2: { type: GraphQLInt},
    Y2_3: { type: GraphQLInt},
    Y3_4: { type: GraphQLInt},
    Y4_beyond: { type: GraphQLInt},
  }),
});

module.exports = ProfessorType;
