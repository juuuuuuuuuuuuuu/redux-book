import { stringifyUrl, parse } from 'query-string'
import axios from 'axios';

// export default function* getBooks(search, startIndex) {
  export default function getBooks(search) {
  const { q, ...rest } = parse(search)
  const input = stringifyUrl({
    url: 'https://www.googleapis.com/books/v1/volumes',
    query: {
      q: `${q}`,
      startIndex: 0,
      projection: 'full',
    }
  })

  return axios.get(input);
}
