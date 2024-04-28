import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


const ItemInfo = () => {

    let {id} = useParams();
    const [item, setItem] = useState({});

    const getItem = () => {
        axios({
            method: 'GET',
            url: "/detail/" + id
        }).then((response) => {
            console.log(response.data)
            setItem(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getItem();
    }, [])

    return (
        <div className='detail'>
            <h4>상세페이지</h4>
            <img src="https://placehold.co/300"/>
            <h4>{item.title}</h4>
            <p>{item.price}</p>
        </div>
    )
}

export default ItemInfo;