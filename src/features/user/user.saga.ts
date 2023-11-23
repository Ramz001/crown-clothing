import { takeLatest, call, all, put } from "typed-redux-saga/macro";
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpStart,
} from "./user.slice";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
  AddditinalInformation,
} from "../../utils/firebase/firebase.utils";
import { User } from "firebase/auth";


export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalInformation?: AddditinalInformation
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInformation
    );
    if (userSnapshot) {
      yield* put(
        signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );
    }
  } catch (error) {
    yield* put(signInFailed(error as string));
  }
}

export function* signInWithEmail({ email, password }: any) {
  try {
    const userCredential = yield* call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );

    if (userCredential) {
      const { user } = userCredential;

      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signInFailed(error as string));
  }
}

export function* signUpWithEmail({
  email,
  password,
  displayName,
}: any) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    if (userCredential) {
      const { user } = userCredential;

      yield* call(getSnapshotFromUserAuth, user, { displayName });
    }
  } catch (error) {
    yield* put(signUpFailed(error as string));
  }
}

export function* signInWithGoogle() {
  try {
    const user = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user.user);
  } catch (error) {
    yield* put(signInFailed(error as string));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailed(error as string));
  }
}

export function* signOutStart() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as string));
  }
}

export function* onCheckUserSession() {
  yield* takeLatest("user/checkUserSession", isUserAuthenticated);
}

export function* onSignInGoogleStart() {
  yield* takeLatest("user/googleSignInStart", signInWithGoogle);
}

export function* onSignInEmailStart() {
  yield* takeLatest("user/emailSignInStart", signInWithEmail);
}

export function* onSignOutStart() {
  yield* takeLatest("user/signOutStart", signOutStart);
}

export function* onSignUpStart() {
  yield* takeLatest("user/signUpStart", signUpWithEmail);
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onSignInGoogleStart),
    call(onSignInEmailStart),
    call(onSignOutStart),
    call(onSignUpStart),
  ]);
}
