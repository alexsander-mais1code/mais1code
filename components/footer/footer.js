import styles from './footer.module.scss';

export default function Navbar() {
    return (
      <footer className={`${styles['footer']} container`}>
        <div>
          Footer
        </div>
      </footer>
    )
  }