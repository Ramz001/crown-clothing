export type SignUpWithEmailType = {
  email: string;
  password: string;
  displayName: string;
};

export type SignInWithEmailType = {
  email: string;
  password: string;
};

export type SignUpWithEmailTypes = {
  payload: {

    email: string;
    password: string;
    displayName: string;
  }
};

export type SignInWithEmailTypes = {
  payload: {

    email: string;
    password: string;
  }
};
