const productResolver = {
  Query: {
    getProductById: (
      _,
      { productId, userId },
      { dataSources, userIdToken }
    ) => {
      if (userId === userIdToken)
        return dataSources.productAPI.getProductById(productId);
      else return null;
    },
    allProductsByUserId: (_, { userId }, { dataSources, userIdToken }) => {
      if (userId === userIdToken)
        return dataSources.productAPI.allProductsByUserId(userId);
      else return null;
    },
  },
  Mutation: {
    createProduct: (_, { product, userId }, { dataSources, userIdToken }) => {
      if (userId === userIdToken)
        return dataSources.productAPI.createProduct(product);
      else return null;
    },
    modifyProduct: async (
      _,
      { product, userId },
      { dataSources, userIdToken }
    ) => {
      if (userId === userIdToken) {
        return await dataSources.productAPI.modifyProduct(product);
      } else return null;
    },
    deleteProduct: (_, { productId, userId }, { dataSources, userIdToken }) => {
      if (userId === userIdToken)
        return dataSources.productAPI.deleteProduct(productId);
      else return null;
    },
    pagination: (
      _,
      { paginationSettings, userId },
      { dataSources, userIdToken }
    ) => {
      if (userId === userIdToken)
        return dataSources.productAPI.pagination(paginationSettings);
      else return null;
    },
  },
};

module.exports = productResolver;
