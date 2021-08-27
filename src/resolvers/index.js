const productResolver = require("./product_resolver");
const supplierResolver = require("./supplier_resolver");
const userResolver = require("./users_resolver");

const lodash = require("lodash");

const resolvers = lodash.merge(productResolver, supplierResolver, userResolver);

module.exports = resolvers;
