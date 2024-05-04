import {useState} from "react";
import axios from "axios";


const SignUp = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');

    const submitSignUp = () => {
        let pushData = {
            username: username,
            password: password,
            displayName: displayName
        }

        axios({
            method: 'POST',
            url: '/signupMember',
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
            <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder='닉네임'/>
            <button onClick={() => submitSignUp()}>회원가입</button>
        </div>
    )
};

export default SignUp