 export const logout = () => {
    localStorage.removeItem('user')
}

export const isUserLogin = () => {
    const user = JSON.parse(localStorage.getItem('user') ?? '{}');
    return user.email && user.token;
}