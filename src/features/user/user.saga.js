import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
} from "./user.slice";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalInformation) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInformation
      );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUpWithEmail({
  payload: { email, password, displayName },
}) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user, { displayName })
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signInWithGoogle() {
  try {
    const user = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user.user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signOutStart() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest("user/checkUserSession", isUserAuthenticated);
}

export function* onSignInGoogleStart() {
  yield takeLatest("user/googleSignInStart", signInWithGoogle);
}

export function* onSignInEmailStart() {
  yield takeLatest("user/emailSignInStart", signInWithEmail);
}

export function* onSignOutStart() {
  yield takeLatest("user/signOutStart", signOutStart);
}

export function* onSignUpStart() {
  yield takeLatest("user/signUpStart", signUpWithEmail);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onSignInGoogleStart),
    call(onSignInEmailStart),
    call(onSignOutStart),
    call(onSignUpStart),
  ]);
}
