import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {loginAction} from "../redux/actions/loginAction";

const Authorization = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();
    const onSubmit = () => {
        validatePhoneNumber(phoneNumber)
            ? dispatch(loginAction(phoneNumber))
            : alert('Введите корректный номер телефона');
    }
    const validatePhoneNumber = (phone) => {
        const reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        return reg.test(phone)
    }
    return (
        <div className={'authorization'}>
            <input type='tel' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}
                   placeholder={'Введите номер телефона'} type="text"/>
            <button onClick={onSubmit}>Войти</button>
        </div>
    );
};

export default Authorization;