import { NavLink } from "react-router-dom";

function Menu(props){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NavLink to={"/"} className="nav-link">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to={"/category"} className="nav-link">Category</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to={"/product"} className="nav-link">Product</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to={"/cart"} className="nav-link">Cart</NavLink>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
    );
}
export default Menu;