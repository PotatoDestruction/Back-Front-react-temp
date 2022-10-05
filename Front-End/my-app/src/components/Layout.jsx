
import './css/Layout.css'

const Layout = ({ children, pages }) => {


    return (
        <div>
            <header> Header </header>
            {children}
            <footer> Footer </footer>
        </div>
    )
}

export default Layout;