import axios from 'axios'

const URL = 'https://randomuser.me/api/'

const getData = (usersLimit) => {
  return axios.get(URL, {
    params: {
      method: 'GET',
      results: usersLimit
    }
  })
    .then(response => response.data.results)
    .catch(error => {
      console.log(error)
      return []
    })
}

export default getData
