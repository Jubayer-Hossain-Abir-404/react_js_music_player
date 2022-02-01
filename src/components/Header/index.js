import { searchIcon } from "../../assets";
const Header = props => {
    return (
        <header className="header flex justify-sb">
            <div className="logo">
                <img src="https://webscript.info/webscript-logo.png" alt="w" />
            </div>
            <div>
                <img src={searchIcon} alt="Search-Icon"/>
            </div>
        </header>
    );
}

export default Header;
