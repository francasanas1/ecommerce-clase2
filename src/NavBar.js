
function NavBar() {
    return (
        <header className="nav-bar">
            <h2>Shop</h2>
            <div id='articulos'>
                <button>Iphone</button>
                <button>Ipad</button>
                <button>Mac</button>
            </div>
            <button id='login'>Log In</button>
            <CartWidget />
        </header>

    );
}

export default NavBar;