import { useSelector, useDispatch } from "react-redux";
import { calculation, clear, answer, del } from "./features/calcSlice";

function App() {
  const dispatch = useDispatch();
  const calc = useSelector((state) => state.calculator);

  return (
    <div className="main">
      <div className="App">
        <h1>Calculator</h1>
        <header>
          <input
            disabled
            value={calc.ans ? calc.ans : calc.value}
            placeholder="0"
            type="text"
            name="calcinput"
            style={{
              color: calc.error && "red",
              fontSize: calc.error && "1.2em",
            }}
          />
        </header>

        <section>
          <button onClick={() => dispatch(clear())}>
            <span>AC</span>
          </button>
          <button onClick={() => dispatch(del())}>
            <span>Del</span>
          </button>
          <button onClick={() => dispatch(calculation("/"))}>
            <span>/</span>
          </button>
          <button onClick={() => dispatch(calculation("+"))}>
            <span>+</span>
          </button>
          <button onClick={() => dispatch(calculation(9))}>
            <span>9</span>
          </button>
          <button onClick={() => dispatch(calculation(8))}>
            <span>8</span>
          </button>
          <button onClick={() => dispatch(calculation(7))}>
            <span>7</span>
          </button>
          <button onClick={() => dispatch(calculation(4))}>
            <span>4</span>
          </button>
          <button onClick={() => dispatch(calculation(5))}>
            <span>5</span>
          </button>
          <button onClick={() => dispatch(calculation(6))}>
            <span>6</span>
          </button>
          <button onClick={() => dispatch(calculation("-"))}>
            <span>-</span>
          </button>
          <button onClick={() => dispatch(calculation(1))}>
            <span>1</span>
          </button>
          <button onClick={() => dispatch(calculation(2))}>
            <span>2</span>
          </button>
          <button onClick={() => dispatch(calculation(3))}>
            <span>3</span>
          </button>
          <button onClick={() => dispatch(calculation("*"))}>
            <span>*</span>
          </button>
          <button onClick={() => dispatch(calculation("."))}>
            <span>.</span>
          </button>
          <button onClick={() => dispatch(calculation(0))}>
            <span>0</span>
          </button>
          <button onClick={() => dispatch(answer())}>
            <span>=</span>
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
