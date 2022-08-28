
import DefaultLayout from "./components/DefaultLayout.js"
import Login from "./components/Login.js"
import Register from "./components/Register.js"
import { Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList/index.js";

// https://codepen.io/liao/pen/mdpmXKg
// https://www.figma.com/file/pFivfS3rDX3N3u3dN9aIlx/TodoList?node-id=6%3A194

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DefaultLayout />} >
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} /> {/*路path 不用斜線*/}
        </Route>
        <Route path="todoList" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
