import { useNavigate } from "react-router-dom";
import { goToHomePage, goToProfilePage, goToProductPage } from "../Router/coordinator";

const Header = () => {
    const navigate = useNavigate()
    return(
        <header>
            <button onClick={() => goToHomePage(navigate)}>
                Ir para a página inicial
            </button>
            <button onClick={() => goToProfilePage(navigate, "Carlos")}>
                Ir para a página de perfil
            </button>
            <button onClick={() => goToProductPage(navigate, "dog")}>
                Ir para a página do produto
            </button>
        </header>
    )
}

export default Header;