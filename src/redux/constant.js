export const domain = 'https://fast-reef-40576.herokuapp.com'
export const axiosConfig = (method, token) => {
    return {
        method,
        headers: {"Authorization" : `Bearer ${ token }`}
    }
}