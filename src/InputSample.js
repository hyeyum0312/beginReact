import React, {useRef, useState} from "react";


function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const nameInput = useRef();
    const {name, nickname} = useRef();


    const onChange = (e) => {
        const {value,name} = e.target;
        setInputs({
            ...inputs, // 기존의 input객체를 복사
            [name]: value
        });

    };
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus();
    };
    return (
        <div>
            <input name="name" placeholder="이름" type="text" value={name} ref={nameInput} onChange={onChange}/>
            <input name="name" placeholder="닉네임" type="text" value={nickname} ref={nameInput} onChange={onChange}/>
            <button onClick={onReset}>버튼</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}
export default InputSample;