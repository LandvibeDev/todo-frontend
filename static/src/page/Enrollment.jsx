import React, {useState} from 'react';
import '../css/Enrollment.css';
import createCard from "../service/createCard";
import Button from "../component/atom/Button";
import Input from "../component/atom/Input";

function Enrollment({history}) {
    const [title, setTitle] = useState('');

    const onChange = (event) => {
        event.stopPropagation();
        setTitle(event.target.value);
    };


    const onPreviousClick = (event) => {
        event.stopPropagation();
        history.goBack();
    };

    const add = async () => {
        const isSuccesses = await createCard(title);
        if (isSuccesses) {
            history.goBack();
        } else {
            alert('다시 Task 추가해주세요.');
        }
    };

    const onEnterPress = (event) => {
        event.stopPropagation();
        if (event.key === 'Enter') {
            add();
        }
    };

    const onAddClick = (event) => {
        event.stopPropagation();
        add();
    };

    const onClearClick = (event) => {
        event.stopPropagation();
        setTitle('');
    };

    return (
        <div className='enrollment'>
            <div className='enrollment-title'>
                <label htmlFor="title">Title</label>
                <Input id='title' onChange={onChange} onKeyPress={onEnterPress} value={title}/>
            </div>
            <div className='enrollment-btn-grp'>
                <Button className='enrollment-btn' onClick={onPreviousClick} value='이전'/>
                <Button className='enrollment-btn' onClick={onAddClick} value='추가'/>
                <Button className='enrollment-btn' onClick={onClearClick} value='지우기'/>
            </div>

        </div>
    );
}

export default Enrollment;
