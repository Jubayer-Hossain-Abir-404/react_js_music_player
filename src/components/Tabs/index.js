import './style.css';

const Tabs = props =>{
    return (
        <div className="tab-container">
            {/* tab header */}
            <div className="tab-header flex">
                <a className="active" href="#commercial">
                    Commercial
                </a>
                <a href="#freelicense">
                    Free License
                </a>
            </div>

            {/* tab content */}

            <div className="tab-contents">
                <div className="tab-content" id="commercial">
                    commercial
                </div>
                <div className="tab-content" id="commercial">
                    freelicense
                </div>
            </div>
        </div>
    );
}

export default Tabs;