import './App.css';
import Header from './components/Header';
import {Footer} from './components/Footer';
import {Todos} from './components/Todos';
import {TodoItem} from './components/TodoItem';

function App() {

  const onDelete = (todo) =>{
    console.log("on delete - ", todo);
  }

  var todos = [
    {
      sno: "1",
      title: "Market",
      desc: "Go to the market"
    },
    {
      sno: "2",
      title: "Mall",
      desc: "Go to the mall"
    },
    {
      sno: "3",
      title: "Office",
      desc: "Go to the office"
    },
  ]
  return (
    <>
      <Header title = "My Todos List"></Header>
      <Todos todos={todos} onDelete={onDelete}></Todos>
      <Footer></Footer>
    </>
  );
}

export default App;
