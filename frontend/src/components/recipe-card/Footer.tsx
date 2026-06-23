export function Footer() {
  return (
    <footer className="app-footer">
      <p className="app-footer__line app-footer__line--strong">
        Contatti: <span>Kevin Bruno conte</span>
      </p>

      <p className="app-footer__line">
        telefono • +39 2345432345| email • kevininf2005@gmail.com
      </p>

      <p className="app-footer__copyright">
        © {new Date().getFullYear()} WorkSpaceNow - All rights reserved.
      </p>
    </footer>
  )
}
