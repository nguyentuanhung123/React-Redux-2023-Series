# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Reduc là gì ?

Là thư viện quản lý state

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

### Tóm lại.

- Với những app nhỏ và sử dụng không quá phức tạp -> Context API
- Với những app lớn nên dùng Redux
