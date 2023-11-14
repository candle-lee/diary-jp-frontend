export interface ILoginRequest {
    username: string;
    email: string;
    password: string;
}

export interface IUserState {
    username: string;
    email: string;
}

export interface IInputItem {
    inputType: string;
    inputName: string;
    description: string;
    placeholderText: string;
    register: any;
    error?: any;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface ISignUp {
    username: string;
    email: string;
    password: string;
}

export interface IRecorder {
    id: string;
    webcamRef: React.RefObject<HTMLVideoElement>;
    previewRef: React.RefObject<HTMLVideoElement>;
  }