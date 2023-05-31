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

      <Route path={'/login'} element={
        <main>
        <div>Login page</div>
      </main>
      }/>

    </Routes>
  );
}

export default App;
