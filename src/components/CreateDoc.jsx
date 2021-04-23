import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import {Redirect} from "react-router-dom";

const CreateDoc = ({phoneNumber}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [termMonth, setTermMonth] = useState('3');
    const [redirect, setRedirect] = useState(false);
    const onSubmit = () => {
        const result = {
            'createUser': phoneNumber,
            'createDate': startDate,
            'termMonth': termMonth,
            'signerFirst': {
                'phoneNumber': firstNumber,
                'signStatus': false,
            },
            'signerSecond': {
                'phoneNumber': secondNumber,
                'signStatus': false,
            }
        }
        axios.post('http://localhost:8888/documents/create', result).then((res) => {
            setRedirect(true);
        })

    }
    return (
        <div className={'createDoc'}>
            {redirect && <Redirect to="/"/>}
            <span>Создание нового документа</span>
            <div className="form-row">
                <label htmlFor="" className="form-label">Документ</label>
                <div className="form-labelside">
                    <input type="file"/>
                </div>
            </div>
            <div className="form-row">
                <label htmlFor="" className="form-label">Номер подписывающей стороны</label>
                <div className="form-labelside">
                    <input value={firstNumber} onChange={e => setFirstNumber(e.target.value)} type="text"
                           placeholder={'Введите номер телефона'}/>
                </div>
            </div>
            <div className="form-row">
                <label htmlFor="" className="form-label">Номер подписывающей стороны</label>
                <div className="form-labelside">
                    <input value={secondNumber} onChange={e => setSecondNumber(e.target.value)} type="text"
                           placeholder={'Введите номер телефона'}/>
                </div>
            </div>
            <div className="form-row">
                <label htmlFor="" className="form-label">Дата</label>
                <div className="form-labelside">
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)}/>
                </div>
            </div>
            <div className="form-row">
                <label htmlFor="" className="form-label">Срок действия (мес)</label>
                <div className="form-labelside">
                    <input value={termMonth} onChange={e => setTermMonth(e.target.value)} type="number"/>
                </div>
            </div>
            <div className="form-row">
                <button onClick={onSubmit}>Создать</button>
            </div>

        </div>
    );
};

export default CreateDoc;