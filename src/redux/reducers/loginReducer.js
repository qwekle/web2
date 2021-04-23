let initialState = {
    joined: false,
    phoneNumber: null,
}


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'JOIN':
            return {
                ...state,
                joined: true,
                phoneNumber: action.payload,
            }
        default:
            return {
                ...state
            }
    }

}
export default loginReducer;