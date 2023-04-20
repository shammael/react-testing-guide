import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, RootState } from "./store";

const ReduxCounter = () => {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment Value"
          data-testid="increment"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span role="contentinfo">{count.value}</span>
        <button
          aria-label="Decrement Value"
          data-testid="decrement"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default ReduxCounter;
