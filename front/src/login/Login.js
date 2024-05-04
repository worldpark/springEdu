import {useState} from "react";
import axios from "axios";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitLogin = () => {
        let pushData = {
            'username': username,
            'password': password
        }
        alert(pushData.username);

        axios({
            method: 'POST',
            url: '/loginMember',
            data: pushData
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error.data);
        })
    }

    return(
        <div>
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='ID'/><br/>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='PASSWORD'/><br/>
            <button onClick={() => submitLogin()}>로그인</button>
        </div>
    )
}

export default Login