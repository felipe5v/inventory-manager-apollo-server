const usersResolver = {
  Mutation: {
    authenticate: (_, { credentials }, { dataSources }) =>
      dataSources.usersAPI.authRequest(credentials),
    refreshToken: (_, { refresh }, { dataSources }) =>
      dataSources.usersAPI.refreshToken(refresh),
    registerUser: (_, { user }, { dataSources }) =>
      dataSources.usersAPI.registerUser(user),
  },
};

module.exports = usersResolver;
