import './App.css';
import Post from './Post';
import Header from './Header';
import { Routes,Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route index element={
        <main>
          <Header />
          <Post />
          <Post />
          <Post />
        </main>
      } />
    </Routes>
  );
}

export default App;
