import './App.css';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import background from './assets/discord-background.png';

function App() {
  return (
    <div className="App">
      <div className="hero" style={{ backgroundImage: `url(${background})` }}>
        <nav className="navbar">
          <img src={discordLogo} alt="Discord logo" className="logo" />
          <ul className="nav-links">
            <li><a href="#">Download</a></li>
            <li><a href="#">Nitro</a></li>
            <li><a href="#">Safety</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
          <div className="nav-right">
            <a href="#" className="btn-login">Login</a>
            <img src={menuIcon} alt="menu" className="menu-icon" />
          </div>
        </nav>

        <div className="hero-content">
          <h1>IMAGINE A PLACE</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a worldwide art community.
            Where just you and a handful of friends can spend time together. A place that makes it
            easy to talk every day and hang out more often.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn-primary">Download for Windows</a>
            <a href="#" className="btn-secondary">Open Discord in your browser</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;