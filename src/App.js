
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Todo from './component/Todo.js';

function App() {
  return (
    <div className="App">
      <h1>New Application</h1>
      <Todo/>
    </div>
  );
}

export default App;
