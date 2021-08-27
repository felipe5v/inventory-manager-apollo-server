const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const SupplierAPI = require("./dataSources/supplier_api");
const ProductAPI = require("./dataSources/product_api");
const UsersAPI = require("./dataSources/users_api");
const authentication = require("./utils/authentication");

const server = new ApolloServer({
  context: authentication,
  typeDefs,
  resolvers,
  dataSources: () => ({
    supplierAPI: new SupplierAPI(),
    usersAPI: new UsersAPI(),
    productAPI: new ProductAPI(),
  }),
  introspection: true,
  playground: true,
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
