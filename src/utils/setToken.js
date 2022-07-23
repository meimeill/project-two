export function setToken(tokenKey, token) {            //将token存储到localStorage
    return localStorage.setItem(tokenKey, token)
}
export function getToken(tokenKey) {            //从localStorage获取token
    return localStorage.getItem(tokenKey)
}
export function removeToken(tokenKey) {            //将token从localStorage中移除
    return localStorage.removeItem(tokenKey)
} 