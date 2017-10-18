import { store } from '../store'
import { push } from 'react-router-redux'

const go = (path) => {
  alert(path)
  store.dispatch(push(path))
}

export { go }