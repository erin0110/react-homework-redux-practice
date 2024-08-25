import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./components/Box";

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } }); // payload?: s내가 필요한 값 보낸다고 생각하면 됨
  };
  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 5 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "noona", password: "123" } });
  };

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={increase}>➕증가</button>
        <button onClick={decrease}>➖감소</button>
      </div>
      <Box />
      <hr />
      <div>
        <button onClick={login}>Login</button>
      </div>
      <p>
        아이디: {id}, 패스워드: {password}
      </p>
    </div>
  );
}

export default App;
