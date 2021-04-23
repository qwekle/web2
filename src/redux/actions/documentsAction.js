import axios from "axios";

export const addWaitingDocuments = (payload) => ({
    type: 'ADD_WAITING_DOCUMENTS',
    payload,
})
export const addSignedDocuments = (payload) => ({
    type: 'ADD_SIGNED_DOCUMENTS',
    payload,
})

export const fetchWaitingDocuments = (phoneNumber) => (dispatch) => {
    axios.get('http://localhost:8888/documents/waiting', {headers: {
            'phoneNumber': phoneNumber,
        }})
        .then((res) => {
            dispatch(addWaitingDocuments(res.data))
            //console.log('Ожидающие подписи документы', res.data)
        });
}
export const fetchSignedDocuments = (phoneNumber) => (dispatch) => {
    axios.get('http://localhost:8888/documents/signed', {headers: {
            'phoneNumber': phoneNumber,
        }})
        .then((res) => {
            dispatch(addSignedDocuments(res.data))
            //console.log('Подписанные документы', res.data)
        })
}