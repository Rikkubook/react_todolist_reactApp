import { useState, useEffect } from "react";
import plus from "../../assets/plus-lg.svg"
import { useAuth } from "../../Auth";
import { useNavigate, Link } from "react-router-dom";


function InputBox(props) {
  const { token } = useAuth();
  const [newTodo, setNewTodo] = useState({content: ""});
  const _url = "https://todoo.5xcamp.us/todos";

  const handleChange = (e) => {
    setNewTodo({content: e.target.value});
  };
  const handleAddTodo = ()=>{
    fetch(_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'authorization': token
      },
      body: JSON.stringify({
        todo: newTodo
      })
    }).then((res) => {
      return res.json();
    })
  }
  return (
    <div className="inputBox">
      <input
        type="text"
        placeholder="請輸入待辦事項"
        value={newTodo.value}
        onChange={handleChange}
      />
      <Link to="#" onClick={handleAddTodo}>
        <img className="plus-icon" src={plus} alt="plus" />
      </Link>
    </div>
  );
}
export default InputBox