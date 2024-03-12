import logo from '../../assets/img/Logo@2x.png';
import './navbar2style.css';


function Navbar2(){
    return(
      <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container">
  <div>
      <img className="icon" src={logo} alt="logo"  />
    </div>
    <button id='navbar-toggler' class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">JOBS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/candidate">CANDIDATE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/whatwedo">WHAT WE DO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/clients">CLIENTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/blog">BLOG</a>
        </li><li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/contact">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar2;