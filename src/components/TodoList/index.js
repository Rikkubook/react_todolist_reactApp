import LoginHeader from "./LoginHeader"
import InputBox from "./InputBox"
import Tabs from "./Tabs"
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../Auth";
import { useState, useEffect } from "react";

function TodoList(props) {
  // 如果沒有token 倒回首頁

  const { token } = useAuth();
  const [todoList, setTodoList] = useState([]);
  const [todoNumbers, setTodoNumbers] = useState(0);
  const _url = "https://todoo.5xcamp.us/todos";
  useEffect(() => {
    getTodo()
  }, [])

  useEffect(() => {
    let number = 0 
    todoList.forEach((item)=>{
      console.log(item.completed_at)
      if(item.completed_at ){
        number+=1
      }
    })
    setTodoNumbers(number)
  },[todoList])

  const getTodo = () => {
    fetch(_url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'authorization': token
      }
    }).then((res) => {
      console.log(res);
      return res.json();
    }).then((result) => {
      setTodoList(result.todos) // 算數量依定要用 useEffect 因為此時不能用async await
    });
  }

  const navigate = useNavigate()
  if (!token){
    return navigate('/')
  }

  const handleChange = (item)=>{
    const _url = `https://todoo.5xcamp.us/todos/${item.id}/toggle`;
    fetch(_url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'authorization': token
      },
      body: JSON.stringify({
        id: item.id
      })
    }).then((res) => {
      return res.json();
    }).then((result) => {
      console.log(result)
      if(result.completed_at){
        console.log('a')
        setTodoNumbers(todoNumbers + 1)
      }else{
        setTodoNumbers(todoNumbers - 1)
      }
    });
  }

  return (
    <div id="todoListPage" className="bg-half">
        <LoginHeader use={props.use}/>
        <div className="container todoListPage vhContainer">
          <div className="todoList_Content">
              <InputBox getTodo={getTodo}/>
              <div className="todoList_list">
                <Tabs/>
                <div className="todoList_items">
                  <ul className="todoList_item">
                    {todoList.map((item)=>(
                      <li key={item.id}>
                        <label className="todoList_label">
                          <input className="todoList_input" type="checkbox" defaultChecked={item.completed_at? true: false} onClick={()=>handleChange(item)}/>
                          <span>{item.content}</span>
                        </label>
                        <a href="/#">
                          <i className="fa fa-times"></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="todoList_statistics">
                    <p> {todoNumbers} 個已完成項目</p>
                    <a href="/#">清除已完成項目</a>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>

  );
}
export default TodoList