import React, {useState} from 'react';
import '../css/Enrollment.css';
import createCard from "../service/createCard";
import Button from "../component/atom/Button";
import Input from "../component/atom/Input";

function Enrollment({history}) {
    const [title, setTitle] = useState('');
    const [assignee, setAssignee] = useState('');

    const onChangeTitle = (event) => {
        event.stopPropagation();
        setTitle(event.target.value);
    };

    const onChangeAssignee = (event) => {
        event.stopPropagation();
        setAssignee(event.target.value);
    };

    const onPreviousClick = (event) => {
        event.stopPropagation();
        history.goBack();
    };

    const onAddClick = async (event) => {
        event.stopPropagation();
        const isSuccesses = await createCard(title, assignee);
        if (isSuccesses) {
            history.goBack();
        } else {
            alert('입력 값을 다시 확인해주세요.');
        }
    };

    const onClearClick = (event) => {
        event.stopPropagation();
        setTitle('');
        setAssignee('');
    };

    return (
        <div className='enrollment'>
            <div className='enrollment-input-box'>
                <div>
                    <label htmlFor="title">Title</label>
                    <Input id='title' onChange={onChangeTitle} value={title}/>
                </div>
                <div>
                    <label htmlFor="assignee">담당자</label>
                    <Input id='assignee' onChange={onChangeAssignee} value={assignee}/>
                </div>
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
