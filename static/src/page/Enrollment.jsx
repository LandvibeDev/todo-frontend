import React, {useState} from 'react';
import '../css/Enrollment.css';
import createCard from "../service/createCard";
import Button from "../component/atom/Button";
import Input from "../component/atom/Input";

function Enrollment({history}) {
    const [title, setTitle] = useState('');
    const [assignee, setAssignee] = useState('');
    const [priority, setPriority]=useState(2);

    const onChange = (event) => {
        event.stopPropagation();
        setTitle(event.target.value);
    };

    const onChangeAssignee = (event) => {
        event.stopPropagation();
        setAssignee(event.target.value);
    };

    const onChangePriority = (event) => {
        event.stopPropagation();
        setPriority(event.target.value);
    };

    function onDisplayPriority(){
        document.getElementById("priority").selectedIndex="1";
    }

    const onPreviousClick = (event) => {
        event.stopPropagation();
        history.goBack();
    };

    const add = async () => {
        const isSuccesses = await createCard(title, assignee, priority);
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
        setAssignee('');
        setPriority(2);
        onDisplayPriority();

    };


    return (
        <div className='enrollment'>
            <div className='enrollment-title'>
                <label htmlFor="title">Title</label>
                <Input id='title' onChange={onChange} onKeyPress={onEnterPress} value={title}/>
                <br/>
                <label htmlFor="title">Assignee</label>
                <Input id='assignee' onChange={onChangeAssignee} value={assignee}/>
                <br/>
                <label htmlFor="title">Priority</label>
                <select name="priority" id="priority" onChange={onChangePriority}>
                    <option value="1">1순위</option>
                    <option value="2" selected="selected">2순위</option>
                    <option value="3">3순위</option>
                </select>

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
