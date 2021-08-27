const { gql } = require("apollo-server");

const supplierTypeDefs = gql`
  type Supplier {
    supplierId: String!
    userId: String!
    supplierName: String!
    phone: String
    email: String
  }

  input SupplierInput {
    userId: String!
    supplierId: String!
    supplierName: String!
    phone: String
    email: String
  }

  type Query {
    getSupplierById(supplierId: String!, userId: String!): Supplier!
    getAllSuppliers(userId: String!): [Supplier]
  }

  type Mutation {
    createSupplier(supplier: SupplierInput!, userId: String!): Supplier!
    modifySupplier(supplier: SupplierInput!, userId: String!): Supplier!
    deleteSupplier(supplierId: String!, userId: String!): String!
  }
`;

module.exports = supplierTypeDefs;
