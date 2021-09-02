const { RESTDataSource } = require("apollo-datasource-rest");

const serverConfig = require("../server");

class SupplierAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.product_api_url;
  }

  async getSupplierById(supplierId) {
    return await this.get(`/suppliers/${supplierId}`);
  }

  async createSupplier(supplier) {
    return await this.post(`/suppliers/`, supplier);
  }

  async modifySupplier(supplier) {
    const supplierId = supplier.supplierId;
    console.log(supplierId);
    return await this.put(`/modify-supplier/${supplierId}`, supplier);
  }

  async deleteSupplier(supplierId) {
    return await this.delete(`/delete-supplier/${supplierId}`);
  }

  async getAllSuppliers(userId) {
    return await this.get(`/all-suppliers/${userId}`);
  }
}

module.exports = SupplierAPI;
