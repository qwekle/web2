import React, {useEffect, useState} from 'react';
import axios from "axios";
import Sign from "./Sign";
import {Redirect} from "react-router-dom";

const Document = ({phoneNumber}) => {
    const url = window.location.href.split('/');
    const documentId = url[url.length - 1];
    const [document, setDocument] = useState('');
    const [redirect, setRedirect] = useState(false)
    const sendSign = () => {
        axios.post(`http://localhost:8888/document/sign`, {id: documentId, phoneNumber: phoneNumber}).then((res) => {
            setRedirect(true);
        });
    }

    useEffect(() => {
        axios.get(`http://localhost:8888/document?id=${documentId}`).then((res) => {
            setDocument(res.data);
        })
    }, [])
    return (
        <div className={'document'}>
            {redirect && <Redirect to="/" />}
            <div className="form-row">
                <label htmlFor="" className="form-label">ID</label>
                <div className="form-labelside">
                    {document.id}
                </div>
            </div>
            <div className="form-row">
                <label htmlFor="" className="form-label">Создатель документа</label>
                <div className="form-labelside">
                    {document.createUser}
                    {document.signStatus && <span>Подписано</span>}
                </div>
            </div>
            <div className="form-row">
                <label htmlFor="" className="form-label">Подписывающий</label>
                <div className="form-labelside">
                    {document.signerFirst && document.signerFirst.phoneNumber}
                    {document.signerFirst && document.signerFirst.signStatus && <span>Подписано</span>}
                </div>
            </div>
            <div className="form-row">
                <label htmlFor="" className="form-label">Подписывающий</label>
                <div className="form-labelside">
                    {document.signerSecond && document.signerSecond.phoneNumber}
                    {document.signerSecond && document.signerSecond.signStatus && <span>Подписано</span>}
                </div>
            </div>
            <div className="form-row">
                <label htmlFor="" className="form-label">Дата создания</label>
                <div className="form-labelside">
                    {document.createDate}
                </div>
            </div>
            <div className="form-row">
                <label htmlFor="" className="form-label">Срок действия (мес)</label>
                <div className="form-labelside">
                    {document.termMonth}
                </div>
            </div>
            <Sign />
            <button onClick={sendSign} className={'sign-button'}>Подписать</button>
        </div>
    );
};

export default Document;