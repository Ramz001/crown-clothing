import { all, call } from 'typed-redux-saga/macro'
import { categoriesSaga } from '../features/categories/categories.saga'
import { userSaga } from '../features/user/user.saga'

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSaga)])
}
