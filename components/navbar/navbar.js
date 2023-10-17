import styles from './navbar.module.scss';

export default function Navbar() {
    return (
      <nav className={`${styles['menu-topo']} container` }>
          <ul>
              <li>
                  <a className="titulos" href="/" >Personagens</a>
              </li>
              <li>
                  <a  className="titulos" href="#">Episodios</a>
              </li>
              <li>
                  <a  className="titulos" href="/contato">Contato</a>
              </li>
          </ul>

          <img alt="Logo" src="./assets/logo_topo.png" />
      </nav>
    )
  }