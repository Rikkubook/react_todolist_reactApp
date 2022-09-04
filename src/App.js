
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./Auth";
import DefaultLayout from "./components/DefaultLayout.js"
import ProtectedRoute from "./components/ProtectRoute"
import Login from "./components/Login.js"
import Register from "./components/Register.js"
import TodoList from "./components/TodoList/index.js";

// https://codepen.io/liao/pen/mdpmXKg
// https://www.figma.com/file/pFivfS3rDX3N3u3dN9aIlx/TodoList?node-id=6%3A194

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <div>
      <AuthContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route path="/" element={<DefaultLayout />} >
            <Route index element={<Login setUser={setUser}/>} />
            <Route path="register" element={<Register />} /> {/*路path 不用斜線*/}
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="todoList" element={<TodoList use={user}/>} />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
