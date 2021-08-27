const { gql } = require("apollo-server");

const productTypeDefs = gql`
  type Product {
    productId: String!
    userId: String!
    productName: String!
    category: String
    urlImg: String
    minimumAmount: Float
    suppliersId: [String]
  }

  input ProductInput {
    productId: String!
    userId: String!
    productName: String!
    category: String
    urlImg: String
    minimumAmount: String!
    suppliersId: [String]
  }

  input PaginationInput {
    pageNumber: Int!
    pageSize: Int!
    userId: String!
    searchParam: String!
  }

  type Pagination {
    currentPage: Int!
    pageSize: Int!
    totalCount: Int!
    totalPages: Int!
    data: [Product]
  }

  type Query {
    getProductById(productId: String!, userId: String!): Product
    allProductsByUserId(userId: String!): [Product]
  }

  type Mutation {
    createProduct(product: ProductInput!, userId: String!): Product
    modifyProduct(product: ProductInput!, userId: String!): String
    deleteProduct(productId: String!, userId: String!): String
    pagination(
      paginationSettings: PaginationInput!
      userId: String!
    ): Pagination
  }
`;

module.exports = productTypeDefs;
