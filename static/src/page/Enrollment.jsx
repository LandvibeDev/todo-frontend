import React, {useReducer, useState} from 'react';
import '../css/Enrollment.css';
import createCard from "../service/createCard";
import Title from "../component/enrollment/title";
import Button from "../component/atom/Button";
import Input from "../component/atom/Input";

const reducer = (buffer, action) => {
    const {type, id, title} = action;
    if (type === 'ADD') {
        return buffer.concat({id, title})
    } else if (type === 'REMOVE') {
        const targetIndex = buffer.findIndex(item => id === item.id && title === item.title);
        buffer.splice(targetIndex, 1);
        return [...buffer];
    } else {
        throw new Error();
    }
};

function Enrollment({history}) {
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [buffer, dispatch] = useReducer(reducer, []);

    const onChange = (event) => {
        event.stopPropagation();
        setTitle(event.target.value);
    };

    const onPreviousClick = (event) => {
        event.stopPropagation();
        history.goBack();
    };

    const add = () => {
        const {length} = title;
        if (length > 0) {
            dispatch({type: 'ADD', id, title});
            setId(id + 1);
            setTitle('');
        }
    };

    const onAddClick = (event) => {
        event.stopPropagation();
        add();
    };

    const onAddKeyUp = (event) => {
        event.stopPropagation();
        if (event.key === 'Enter') {
            add();
        }
    };

    const onClearClick = (event) => {
        event.stopPropagation();
        setTitle('');
    };

    const onSubmitClick = (event) => {
        event.stopPropagation();
        const titleList = buffer.map(item => item.title);
        if (createCard(...titleList)) {
            history.goBack();
        }
    };

    return (
        <div className='enrollment'>
            <div className='enrollment-title'>
                <label htmlFor="title">Title</label>
                <Input id='title' onChange={onChange} onKeyPress={onAddKeyUp} value={title}/>
            </div>
            <div className='buffer'>
                {
                    buffer.map(item => {
                        return <Title key={item.id} id={item.id} title={item.title} dispatch={dispatch}/>;
                    })
                }
            </div>
            <div className='enrollment-btn-grp'>
                <Button className='enrollment-btn' onClick={onPreviousClick} value='이전'/>
                <Button className='enrollment-btn' onClick={onAddClick} value='추가'/>
                <Button className='enrollment-btn' onClick={onClearClick} value='지우기'/>
                <Button className='enrollment-btn' onClick={onSubmitClick} value='제출'/>
            </div>

        </div>
    );
}

export default Enrollment;
