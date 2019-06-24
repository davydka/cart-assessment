import axios from 'axios'

const TIMEOUT = 100
const apiUrl = 'http://tech.work.co/shopping-cart/products.json'

export default {
  getProducts: (cb) => {
    return axios.get(apiUrl)
      .then(response => {
        cb(response.data)
      })
      .catch(error => {
        throw(error);
      })
  },
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
