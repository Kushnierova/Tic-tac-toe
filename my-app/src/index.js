import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Якщо ви хочете почати вимірювати ефективність у своєму додатку, передайте функцію
// для реєстрації результатів (наприклад: reportWebVitals(console.log))
// або надіслати на кінцеву точку аналітики. Читайте також: https://bit.ly/CRA-vitals

// reportWebVitals();
class Square extends React.Component {
  render() {
    return <button className="square">{/* TODO */}</button>;
  }
}

// ❗🆎Square (Клітинка)
// ❗🆎Board (Поле)
// ❗🆎Game (Гра)

class Board extends React.Component {
  // ❗Метод render повертає опис того, що ви хочете бачити на екрані.
  // ❗React приймає цей опис і відтворює результат.
  // ❗Зокрема, render повертає React-елемент — полегшену версію того, що треба відрендерити.
  // ❗🆎Рéндеринг, комп'ютерна візуалізація (англ. rendering — візуалізація, проявлення, відмальовування, подання) 
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
