import { useHistory } from 'react-router-dom'
import { stringifyUrl, parse } from 'query-string'

export default function useRouter(query) {
  const history = useHistory();
  const path = stringifyUrl({
    url:'/result',
    query
  })

  history.push(path);
}
