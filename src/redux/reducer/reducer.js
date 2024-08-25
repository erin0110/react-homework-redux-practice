let initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  console.log("action?", action);
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + action.payload.num }; // ...state를 쓴 이유: initialState에 다른 state들도 있을 수도 있으므로, 기존 객체들을 복사하고 count업데이트를 해주는것.
  } else if (action.type === "DECREMENT") {
    return { ...state, count: state.count - action.payload.num };
  } else if (action.type === "LOGIN") {
    return {
      ...state,
      id: action.payload.id,
      password: action.payload.password,
    };
  }
  return { ...state }; // 따라서 위에 있는 값이 아니더라도,기존 state들은 리턴을 해주어야 하기 때문

  // switch문 사용한다면 아래와 같이
  // switch (action.type) {
  //   case "INCREMENT":
  //     return { ...state, count: state.count + 1 };
  //   default:
  //     return { ...state };
  // }
}

export default reducer;
