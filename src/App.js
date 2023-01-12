import React, { useRef, useState, useMemo } from 'react';
import CreateUser from "./CreateUser";
import UserList from "./UserList";


function App() {
    const [style,setStyle] = useState();
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ]);
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });
    const { username, email } = inputs;

    function countActiveUsers(users) {
        console.log('활성 사용자 수를 세는중...');
        return users.filter(user => user.active).length;
    }
    // const count = countActiveUsers(users);
    const count = useMemo(() => countActiveUsers(users), [users]);
    const onChange = (e)=>{
        let {name,value} = e.target
        console.log('name,value',name,value);
        setInputs({
            ...inputs,
            [name]: value
        });
    }
    const nextId = useRef(4);
    const onCreate = (e)=>{
        const user = {
            id: nextId.current,
            username,
            email
        };
        setUsers([...users,user]);
        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;
    }
    const onRemove = (removeData)=> {
        console.log('삭제',removeData);
        setUsers(users.filter(user => user.id !== removeData));
    }
    const onToggle = (id) => {
        console.log('토글 색을바꾸시오');
        setUsers(
            users.map(user =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    }

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
            <div>활성사용자 수 : {count}</div>
        </>

    )
}

export default App;