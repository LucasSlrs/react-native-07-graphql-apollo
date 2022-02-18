module.exports = {
  client: {
    includes: ["./src/**/*.gql"],
    service: {
      name: "wawa-graphql-demo",
      localSchemaFile: "src/graphql/generated/schema.json",
    },
  },
};
