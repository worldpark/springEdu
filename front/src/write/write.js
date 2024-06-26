import '../App.css';
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const Write = () => {

    let navicate = useNavigate();

    const [itemTitle, setItemTitle] = useState('');
    const [itemPrice, setItemPrice] = useState('');

    const addWrite = () => {

        let pushData = {
            title: itemTitle,
            price: itemPrice
        }

        axios({
            method: 'POST',
            url: '/writeAdd',
            data: pushData
        }).then(() => {
            navicate("/list");

        }).catch((error) => {

            if(error.response.status == 400){
                alert('400 에러남');
            }
        })
    }


    return (
        <div>
            <input name="title" value={itemTitle} onChange={(e) => setItemTitle(e.target.value)}/>
            <input name="price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)}/>
            <button onClick={() => addWrite()}>전송</button>
        </div>
    )
}

export default Write;
