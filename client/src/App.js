import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">MeuBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>

      <div className="post">
        <div className="image">
          <img src="https://integralismo.org.br/wp-content/uploads/2022/09/Independencia-ou-morte-integralismo-768x411.jpeg" alt="" />
        </div>
        <div className="texts">
          <h2>A verdadeira história da Independência</h2>
          <p className="info">
            <a href="" className="author">Dawid Paszko</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p>A Independência foi o resultado de séculos de história de uma nação, e foi conquistada pelo povo</p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img src="https://integralismo.org.br/wp-content/uploads/2022/09/Independencia-ou-morte-integralismo-768x411.jpeg" alt="" />
        </div>
        <div className="texts">
          <h2>A verdadeira história da Independência</h2>
          <p>A Independência foi o resultado de séculos de história de uma nação, e foi conquistada pelo povo</p>
        </div>
      </div>

    </main>
  );
}

export default App;
