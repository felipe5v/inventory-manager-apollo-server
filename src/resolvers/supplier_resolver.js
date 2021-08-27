const supplierResolver = {
  Query: {
    getSupplierById: (
      _,
      { supplierId, userId },
      { dataSources, userIdToken }
    ) => {
      if (userId === userIdToken)
        return dataSources.supplierAPI.getSupplierById(supplierId);
      else return null;
    },
    getAllSuppliers: (_, { userId }, { dataSources, userIdToken }) => {
      console.log(userId, userIdToken);
      if (userId === userIdToken) {
        return dataSources.supplierAPI.getAllSuppliers(userId);
      } else return null;
    },
  },
  Mutation: {
    createSupplier: (_, { supplier, userId }, { dataSources, userIdToken }) => {
      if (userId === userIdToken)
        return dataSources.supplierAPI.createSupplier(supplier);
      else return null;
    },
    modifySupplier: (_, { supplier, userId }, { dataSources, userIdToken }) => {
      if (userId === userIdToken)
        return dataSources.supplierAPI.modifySupplier(supplier);
      else return null;
    },
    deleteSupplier: (
      _,
      { supplierId, userId },
      { dataSources, userIdToken }
    ) => {
      if (userId === userIdToken)
        return dataSources.supplierAPI.deleteSupplier(supplierId);
      else return null;
    },
  },
};

module.exports = supplierResolver;
