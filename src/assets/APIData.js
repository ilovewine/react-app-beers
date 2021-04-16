import axios from 'axios';

export default class APIData {
  constructor() {
    this.apiConfig = axios.create({
      baseURL: 'https://api.punkapi.com/v2/beers/',
    });
  }

  async makeAPICall(options) {
    return await this.apiConfig(options)
      .then(res => res)
      .catch(error => {
        throw new Error(error);
      });
  }

  async getBeers() {
    return await this.makeAPICall({
      method: 'get',
    });
  }

  async getPaginatedBeers(page, paginationAmount) {
    return await this.makeAPICall({
      method: 'get',
      params: {
        page,
        per_page: paginationAmount,
      },
    });
  }

  async getBeer(id) {
    return await this.makeAPICall({
      method: 'get',
      url: id,
    });
  }

  async getFilteredBeers(filters) {
    return await this.makeAPICall({
      method: 'get',
      params: filters,
    });
  }
}
