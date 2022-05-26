function reducer(state, action) {
    switch (action.type) {
        case "handleInput":
            return {
                ...state,//should spread first
                [action.field]: action.value,//new value will override it
            }
        case 'startLogin':
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case 'loginSuccess':
            return {
                email: '',
                password: '',
                isLoading: false,
                error: ''
            }
        case 'loginFail':
            return {
                ...state,
                error: action.message,
                password: "",
                isLoading: false
            }
        default:
            throw new Error();
    }
}

export default reducer;