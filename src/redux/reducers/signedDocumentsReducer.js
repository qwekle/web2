let initialState = {
    'documents': [

    ]
}
const signedDocumentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SIGNED_DOCUMENTS':
            return {
                ...state,
                'documents': action.payload
            }
        default:
            return {
                ...state
            }
    }

}
export default signedDocumentsReducer;