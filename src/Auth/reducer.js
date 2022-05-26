function reducer(state, action) {
    switch (action.type) {
        case "handleInput":
            return {
                ...state,//should spread first
                [action.field]: action.value,//new value will override it
            }
        default:
            throw new Error();
    }
}

export default reducer;