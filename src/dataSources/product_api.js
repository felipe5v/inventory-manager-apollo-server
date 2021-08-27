const { RESTDataSource } = require("apollo-datasource-rest");

const serverConfig = require("../server");

class ProductAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.product_api_url;
  }

  async getProductById(productId) {
    return await this.get(`/products/${productId}`);
  }

  async allProductsByUserId(userId) {
    return await this.get(`/all-products/${userId}`);
  }

  async createProduct(product) {
    return await this.post("/products", product);
  }

  async modifyProduct(product) {
    const productId = product.productId;
    return await this.put(`/modify-product/${productId}`, product);
  }

  async deleteProduct(productId) {
    return await this.delete(`/delete-product/${productId}`);
  }
  async pagination(paginationSettings) {
    return await this.post("/my-products", paginationSettings);
  }
}

module.exports = ProductAPI;
