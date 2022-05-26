function fakeLogin(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'admin' && password === '1234') {
                resolve()
            } else {
                reject()
            }
        }, 2000);
    })
}

export default fakeLogin