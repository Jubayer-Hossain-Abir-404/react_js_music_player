import { useState } from 'react';
import { homeIcon, userIcon } from '../../assets';
import './style.css';

const FixFooter = props => {


    const [slideUp, setSlideUp] = useState(false);

    return (
        // here if slideup is true then active else nothing
        <div className={`fix-footer ${slideUp ? 'active' : ''}`}>
            {/* if onclick update setSlideup the opposite of slideup */}
            <div onClick={() => setSlideUp(!slideUp)} className="slide-up-btn"></div>

            <div className="d-visibility"></div>

            <div className="mini-player">
                <div>
                    <div className="artist-cover-img">
                        <img alt=""/>
                    </div>
                    <div>
                        <p>Beyond the line</p>
                        <p>Rizwan Khan</p>
                    </div>
                </div>
            </div>

            {/* navigation menu */}
            <div className="navigation-menu flex justify-evenly">
                <a>
                    <div>
                        <img src={homeIcon} alt="" />
                    </div>
                    <div>
                        <span>Home</span>
                    </div>
                </a>

                <a>
                    <div>
                        <img src={userIcon} alt="" />
                    </div>
                    <div>
                        <span>Profile</span>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default FixFooter;