import {useEffect, useState} from "react";
import axios from "axios";
import '../App.css';

const Notification = () => {

    const [notification, setNotification] = useState([]);

    const setNotifion = () => {
        axios({
            method: 'get',
            url: 'getNotification'
        }).then((response) => {
            setNotification(response.data);

        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        setNotifion();
    }, [])
    return (
        <div>
            {
                notification.map((content, index) => {
                    return(
                        <div key={index} className='card'>
                            <img src='https://placehold.co/300'/>


                            <div>
                                <h4>{content.title}</h4>
                                <p>{content.date}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Notification;