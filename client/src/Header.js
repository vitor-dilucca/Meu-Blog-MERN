import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { UserContext } from "./UserContext"

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext)
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(userInfo => {
      setUserInfo(userInfo);
    })
    .catch(error => {
      console.error('Error fetching profile:', error);
      setUserInfo(null);
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null)
  }

  const username = userInfo?.username

  return (
    <header>
      <Link to="/" className="logo">MeuBlog</Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  )
}