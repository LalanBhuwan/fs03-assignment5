import Home from "./Home";
const Nav = () => {

    return(
        <div className="nav_container ds_flex flex_cntr">  
            <div className="logo">
                <span>LOGO</span>
            </div>
            <div className="nav_home ds_flex flex_cntr">
                <a href={Home}>HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">MENU</a>
                <a href="#">ORDER</a>
                <a href="#">CONTACT</a>
            </div>
        </div>
    );
}
export default Nav;