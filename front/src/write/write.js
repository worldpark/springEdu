import '../App.css';


const Write = () => {


    return(
        <div>
            <form action="/writeAdd" method="POST">
                <input name="title"/>
                <input name="price"/>
                <button type="submit">전송</button>
            </form>
        </div>
    )
}

export default Write;
