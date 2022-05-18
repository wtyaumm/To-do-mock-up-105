import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Login from './components/login';
import { Todo } from './components/todo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
