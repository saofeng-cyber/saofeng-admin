import { LoginConfig } from "./axios"
import request from "./request"


export const login = (params: LoginConfig): any => {
    request({
        url: "/login",
        method: "post",
        data: {
            ...params
        },
        // headers: {
        //     "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTM1NzcxOTgsInV1aWQiOjEwLCJ1c2VybmFtZSI6InNhb2Zlbmc2NjYifQ.grJ7kfgroneawaKkXfTdgYW6CjyD4-pBMmpQYSPlOXo"
        // }
    }
    ).then(res => {
        console.log(res.data);
    }).catch(error => {
        console.log(error);
    })
}