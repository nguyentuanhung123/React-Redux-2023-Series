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
- Redux state là READ-ONLY. Muốn Uodate phải dispatch một action (js object)
- Những thay đổi của redux state được thực hiện bới Pure functions (reducer)
- Redux có thể dùng cho các javascript apps, không chỉ riêng gì ReactJS
- Với những app nhỏ và sử dụng không quá phức tạp -> Context API
- Với những app lớn nên dùng Redux

### Trong store có reducer và trong reducer có state

### Các bước chuẩn bị

- B1 : npm i redux react-redux
- B2 : Tạo 1 folder tên redux chứa 3 file jsx là actions.jsx, reducer.jsx, store.jsx
