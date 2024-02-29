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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export interface IMedia {
    id: number;
    title: string;
    url: string;
    size: number;
    userId: number;
}

export interface IMediaState {
    totalSize: number;
    media: IMedia | null;
}

export interface IUpdateTitle {
    title: string;
    url: string | undefined;
}

export type VideoParams = {
  videoId: string | undefined;
};