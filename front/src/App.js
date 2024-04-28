import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import {Outlet, Route, Routes, useNavigate} from "react-router-dom";
import Notification from "./Norification/Notification";
import Write from "./write/write";
import ItemInfo from "./item/ItemInfo";

function App() {

    const [list, setList] = useState([]);

    const getList = () => {

        axios({
            method: 'GET',
            url: 'getList',
        }).then((response) => {
            setList(response.data);

        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="/list" element={
                        <>
                            <List list={list}/>
                        </>
                    }/>
                    <Route path="/notification" element={<Notification/>}/>
                    <Route path="/write" element={<Write/>}/>
                    <Route path="/detail/:id" element={<ItemInfo/>}/>
                </Route>
            </Routes>
        </div>
    );
}

const Home = () => {

    let navicate = useNavigate();

    return (
        <>
            <div className='nav'>
                <a className='logo'>SpringMall</a>
                <a onClick={() => navicate('/list')}>List</a>
                <a onClick={() => navicate('/write')}>Write</a>
            </div>
            <Outlet/>
        </>
    )
}

const List = (props) => {

    let navicate = useNavigate();

    return (
        <>
            {
                props.list.map((content, index) => {
                    return (
                        <div key={index} className='card' onClick={() => navicate('/detail/' + content.id)}>
                            <img src='https://placehold.co/300'/>
                            <div>
                                <h4>비싼 {content.title}</h4>
                                <p>{content.price}원</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )

}

export default App;
