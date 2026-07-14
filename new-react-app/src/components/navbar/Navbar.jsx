import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div className={theme}>
            <p>This is Navbar Component</p>
            <button
                onClick={() => toggleTheme()}
            >Toggle</button>
        </div>
    )
}

export default Navbar;