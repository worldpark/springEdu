import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import {Outlet, Route, Routes, useNavigate} from "react-router-dom";
import Notification from "./Norification/Notification";
import Write from "./write/write";
import ItemInfo from "./item/ItemInfo";
import Edit from "./edit/itemEdit";

function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="/list" element={
                        <>
                            <List/>
                        </>
                    }/>
                    <Route path="/notification" element={<Notification/>}/>
                    <Route path="/write" element={<Write/>}/>
                    <Route path="/detail/:id" element={<ItemInfo/>}/>
                    <Route path="/edit/:id" element={<Edit/>}/>
                    <Route path="*" element={
                        <div>에러난 페이지임</div>
                    }/>
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

const List = () => {

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

    const deleteItem = (id) => {
        const pushData = {
            id: id
        }

        axios({
            method: 'POST',
            url: 'deleteItem',
            data: pushData
        }).then(() => {
            getList();
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getList();
    }, []);

    let navicate = useNavigate();

    return (
        <>
            {
                list.map((content, index) => {
                    return (
                        <div key={index} className='card' onClick={() => navicate('/detail/' + content.id)}>
                            <img src='https://placehold.co/300'/>
                            <div>
                                <h4>비싼 {content.title}</h4>
                                <p>{content.price}원</p>
                                <a onClick={(e) => {
                                    e.stopPropagation();
                                    navicate('/edit/' + content.id);
                                }}>
                                    edit
                                </a><br/>
                                <a onClick={(e) => {
                                    e.stopPropagation();
                                    deleteItem(content.id);
                                }}>
                                    delete
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )

}

export default App;
