import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import Notification from "./Norification/Notification";

function App() {

    const [list, setList] = useState([]);

    const getList = () => {

        axios({
            method: 'GET',
            url: 'list',
        }).then((response) => {
            setList(response.data);

        }).catch((error) => {
            console.log(error);
        })
    }

    let navicate = useNavigate();

    useEffect(() => {
        getList();
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/" element={
                    <>
                        {
                            list.map((content, index) => {
                                return (
                                    <div key={index} className='card'>
                                        <img src='https://placehold.co/300'/>
                                        <div>
                                            <h4>비싼 {content.title}</h4>
                                            <p>{content.price}원</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <button onClick={() => {
                            navicate('/notification')
                        }}>공지사항</button>
                    </>
                }/>
                <Route path="/notification" element={<Notification/>}/>
            </Routes>
        </div>
    );
}

export default App;
