import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {fetchSignedDocuments, fetchWaitingDocuments} from "../redux/actions/documentsAction";
import {useDispatch, useSelector} from "react-redux";
import documentImg from '../images/logo7-1.png.webp'

const PersonalCabinet = ({phoneNumber}) => {
    const waitingDocuments = useSelector(({waitingDocumentsReducer}) => waitingDocumentsReducer.documents);
    const signedDocuments = useSelector(({signedDocumentsReducer}) => signedDocumentsReducer.documents);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWaitingDocuments(phoneNumber));
        dispatch(fetchSignedDocuments(phoneNumber));
    }, [])
    return (
        <div className={'personal-cabinet'}>
            <div className="add-document">
                <Link to={'/createDoc'} className={'button'}>Добавить документ</Link>
            </div>
            <div className="waiting-documents">
                <span className="waiting-documents__title">Документы ожидающие подписи</span>
                <ul>
                    {waitingDocuments.map((document, index) =>
                        <li key={index + document.id}>
                            <Link to={'/document/' + document.id}>
                                <img src={documentImg} alt=""/>
                                <span>{document.createUser}</span>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className="signed-documents">
                <span className="signed-documents__title">Подписанные документы</span>
                <ul>
                    {signedDocuments.map((document, index) =>
                        <li key={index + document.id}>
                            <Link to="">
                                <img src={documentImg} alt=""/>
                                <span>{document.createUser}</span>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default PersonalCabinet;