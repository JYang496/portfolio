import './styles/style.scss'
import 'react-bootstrap'

export const Header = () => {
  return <>
      <header id="header">
          <div className="d-flex flex-column">

              <div className="profile">
                      <h1 className="text-light"><a href="/">Jinhua Yang</a></h1>
                      <div className="social-links mt-3 text-center">
                          <a href="https://www.linkedin.com/in/jinhua-yang-494186198/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                      </div>
              </div>

              <nav id="navbar" className="nav-menu navbar">
                  <ul>
                      <li><a href="#hero" className="nav-link scrollto"><i className="bx bx-home"></i>
                          <span>Home</span></a></li>
                      <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i>
                          <span>About</span></a></li>
                      <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i>
                          <span>Resume</span></a></li>
                      <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i>
                          <span>Portfolio</span></a></li>
                      <li><a href="#hoobies" className="nav-link scrollto"><i className="bx bx-carousel"></i>
                          <span>Hobbies</span></a></li>
                  </ul>
              </nav>
          </div>
      </header>
  </>
}
