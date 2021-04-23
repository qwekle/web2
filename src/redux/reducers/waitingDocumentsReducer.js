let initialState = {
    'documents': [

    ]
}


const waitingDocumentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_WAITING_DOCUMENTS':
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
export default waitingDocumentsReducer;