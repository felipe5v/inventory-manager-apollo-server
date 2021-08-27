//Se llama al typedef (esquema) de cada submodulo
const supplierTypeDefs = require("./supplier_type_def");
const productTypeDefs = require("./product_type_def");
const usersTypeDefs = require("./users_type_defs");

//Se unen
const schemasArrays = [supplierTypeDefs, productTypeDefs, usersTypeDefs];

//Se exportan
module.exports = schemasArrays;
