# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Redux là gì ?

- Là thư viện js quản lý state, mà state này có thể dự đoán (predictable) được
- Sử dụng kiến trúc uni-directional data flow (chiếu một chiều)

## Context API(useContext)

Ưu điểm:

- Là hook có sẵn trong React
- Dễ setup và sử dụng

Nhược điểm:

- Khó debug
- Khi state thay đổi, thì sẽ render tất cả các component đang dùng context đó

## Redux

Nhược điểm:

- Là một thư viện ngoài -> Cài đặt -> tốn bundel size cho ứng dụng(2KB)
- Tốn thời gian để setup
  Ưu điểm:
  Có thể sử dụng redux devtool -> debug
  chỉ re-render các Component sử dụng data thay đổi

### Khi nào cần sử dụng Redux

- Dữ liệu được sử dụng ở nhiều nơi
- Có hỗ trợ chức năng undo/redo
- Cần cache dữ liệu để tái sử dụng cho những lần sau.

Nếu app đang chạy tốt mà không có Redux, vậy có thể app đó không cần tới redux

### Redux có phải chỉ để dùng với ReactJS hay không ?

- Không. Nó được sử dụng cho các javascript apps.
- Vậy có thể là :
  - ReactJS
  - Angular
  - VueJS
  - Pure javascript app
  - Other javascript app

### Tóm lại.

- Redux sử dụng kiến trúc một chiều uni-directional data flow
- Redux chỉ dùng 1 store duy nhất làm Single Source of Truth
- Redux state là READ-ONLY. Muốn Update phải dispatch một action (js object)
- Những thay đổi của redux state được thực hiện bới Pure functions (reducer)
- Redux có thể dùng cho các javascript apps, không chỉ riêng gì ReactJS
- Với những app nhỏ và sử dụng không quá phức tạp -> Context API
- Với những app lớn nên dùng Redux

### Trong store có reducer và trong reducer có state

### Tải : npm i --save redux react-redux

### Tổ chức folder

src
|** reducers
| |** hobby.js
| |** todo.js
| |** ... (one reducer per file)
| |** index.js (root reducer)
|
|** actions
| |** hobby.js
| |** todo.js
| |** ...
|
|** pages
| |** HomePage/index.jsx (connect to redux)
|
|** store.js (reducers, init state, middlewares)
|\_\_ index.js (setup Store Provider)

### Setup reducers và rootreducer

```jsx
// reducers/hobby.js
const initialState = {
  list: ["Listening to music"],
  selectedId: null,
};
const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };
    }
    default:
      return state;
  }
};
export default hobbyReducer;
```

```jsx
// reducers/index.js (ROOT)
const rootReducer = combineReducers({
  hobby: hobbyReducer,
});
export default rootReducer;
```

### Setup redux store

```jsx
// src/store.js
const store = createStore(rootReducer);
export default store;
```

### Setup Store Provider cho toàn app src/index.js

```jsx
const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
```

### Connect vào redux từ reactjs component

- Với class component: dùng HOC connect()
- Với functional component: dùng hooks useSelector() và useDispatch()

```jsx
function HomePage(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
  const dispatch = useDispatch();
  const handleAddHobbyClick = () => {
    const newHobby = "Coding";
    dispatch({
      type: "ADD_HOBBY",
      payload: newHobby,
    });
  };
  return (
    <div className="home-page">
      <HobbyList data={hobbyList} />
      <button onClick={handleAddHobbyClick}>Add new hobby</button>
    </div>
  );
}
export default HomePage;
```

### Làm việc với Redux thông qua hooks

- useSelector()
- useDispatch()

### Setup redux store

- Reducers & Root reducer
- Action creators
- Store

### Setup redux provider

- Allow redux store to be accessible from anywhere ò the app.

### Connect to redux store from component

- Using the tưo hooks here

### Random dữ liệu

- npm i --save casual
