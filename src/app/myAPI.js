// A mock function to mimic making an async request for data
import axios from 'axios'
const url='https://jsonplaceholder.typicode.com/users/'


export function fetchData(amount = 1) {
  return new Promise((resolve) =>
    axios(url).then((res) => resolve({ data: res.data}))
  );
}
