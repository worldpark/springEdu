import '../App.css';
import axios, {Axios} from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const Edit = () => {

    let {id} = useParams();
    let navicate = useNavigate();

    const [itemTitle, setItemTitle] = useState('');
    const [itemPrice, setItemPrice] = useState('');

    const getItem = () => {
        axios({
            method:'GET',
            url:'/getDetail/' + id
        }).then((response) => {
            setItemPrice(response.data.price);
            setItemTitle(response.data.title);

        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getItem();
    }, [])

    const itemUpdate = () => {

        let pushData = {
            id: id,
            title: itemTitle,
            price: itemPrice
        }

        axios({
            method: 'POST',
            url: '/updateItem',
            data: pushData
        }).then(() => {
            navicate("/list");

        }).catch((error) => {

            if(error.response.status == 400){
                alert('400 에러남');
            }
        })
    }

    return(
        <div>
            <input name="title" value={itemTitle} onChange={(e) => setItemTitle(e.target.value)}/>
            <input name="price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)}/>
            <button onClick={() => itemUpdate()}>전송</button>
        </div>
    )
}

export default Edit;
