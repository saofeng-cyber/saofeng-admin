export interface AxiosInstanceConfig {
    url?: string;
    method?: Method | string;
    baseURL?: string;
    timeout?: number;
    timeoutErrorMessage?: string;
    withCredentials?: boolean;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
    onUploadProgress?: (progressEvent: any) => void;
    onDownloadProgress?: (progressEvent: any) => void;
    maxContentLength?: number;
    validateStatus?: ((status: number) => boolean) | null;
    maxBodyLength?: number;
    maxRedirects?: number;
    socketPath?: string | null;
    decompress?: boolean;
    insecureHTTPParser?: boolean;
}

export interface LoginConfig {
    username: string,
    password: string
}

export interface LoginResult {
    config: any,
    data: {
        msg: string,
        success: string,
        userInfo: {
            uid: number,
            username: string,
            password: string,
            token: string,
            salt: string,
            createTime: string
        }
    },
    headers: any,
    status: number,
    statusText?: String
}