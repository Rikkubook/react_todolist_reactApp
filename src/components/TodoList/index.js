import LoginHeader from "./LoginHeader"
import InputBox from "./InputBox"
import Tabs from "./Tabs"
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../Auth";
import { useState, useEffect } from "react";

function TodoList(props) {
  const { token } = useAuth();
  const navigate = useNavigate()

  const [todoList, setTodoList] = useState([]);
  const _url = "https://todoo.5xcamp.us/todos";

  useEffect(() => {
    getTodo()
  }, [])

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
      console.log(result)
      setTodoList(result.todos)
    });
  }


  if (!token){
    return navigate('/')
  }

  return (
    <div id="todoListPage" className="bg-half">
        <LoginHeader use={props.use}/>
        <div className="conatiner todoListPage vhContainer">
          <div className="todoList_Content">
              <InputBox getTodo={getTodo}/>
              <div className="todoList_list">
                <Tabs/>
                <div className="todoList_items">
                  <ul className="todoList_item">
                    {todoList.map((item)=>(
                      <li>
                        <label className="todoList_label">
                          <input className="todoList_input" type="checkbox" value="true" />
                          <span>{item.content}</span>
                        </label>
                        <a href="/#">
                          <i className="fa fa-times"></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="todoList_statistics">
                    <p> 5 個已完成項目</p>
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