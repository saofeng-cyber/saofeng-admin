import { LoginConfig, LoginResult } from "./axios"
import request from "./request"


export const login = (params: LoginConfig): Promise<LoginResult> => {
    return request.post("/login", {
        ...params
    })
}