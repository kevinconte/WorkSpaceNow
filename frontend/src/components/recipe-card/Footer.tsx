export function Footer() {
  return (
    <footer className="app-footer">
      <p className="app-footer__line app-footer__line--strong">
        Contatti: <span>Kevin Bruno conte</span>
      </p>

      <p className="app-footer__line">
        telefono • +39 2345432345| email • kevin.bruno.conte@gmail.com
      </p>

      <p className="app-footer__copyright">
        © {new Date().getFullYear()} ZampaCasa - All rights reserved.
      </p>
    </footer>
  )
}
