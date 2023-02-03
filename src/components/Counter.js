// import { Component } from "react";
import classes from "./Counter.module.css";
// 리덕스 store에 있는 데이터에 액세스 하기
// useSelector 훅은 store가 관리하는 상태(state)부분을 우리가 자동으로 선택할 수 있다.
// 만일 클래스 기방 컴포넌트를 사용하고, 거기에는 connect 함수를 사용한다.
import { useSelector, useDispatch, connect } from "react-redux";

const Counter = () => {
  // useDispatch 훅을 사용해 redux store에 대한 action을 보낸다.
  const dispatch = useDispatch();

  // useSelector로 store의 현재 상태 데이터 값 가져오기.
  // 리덕스 저장소에서 데이터가 변경될 때마다 자동으로 업데이트 되고 최신 카운터를 받게 된다.
  // 데이터 값이 변경되면 이 컴포넌트 함수가 재실행된다. 즉, 항상 최신 카운터를 갖게 된다.
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    // dispatch 함수를 사용해 새로운 action을 보내기
    dispatch({type: "increment"})
  }

  const increaseHandler = () => {
    // dispatch 함수를 사용해 새로운 action을 보내기
    dispatch({type: "increase", amount: 5 })
  }

  const decrementHandler = () => {
    // dispatch 함수를 사용해 새로운 action을 보내기
    dispatch({type: "decrement"})
  }


  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* show 가 true일 때 div를 렌더한다. */}
     {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter


// // 클래스 함수에 리덕스 사용하기
// class Counter extends Component {

//   incrementHandler() {
//     this.props.increment()
//   }

//   decrementHandler() {
//     this.props.decrement()
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})

//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (Counter);


