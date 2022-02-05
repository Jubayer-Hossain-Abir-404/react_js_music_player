import { useState } from 'react';
import { closeIcon, homeIcon, playGreyIcon, userIcon } from '../../assets';
import './style.css';

const FixFooter = props => {


    const [slideUp, setSlideUp] = useState(false);

    return (
        // here if slideup is true then active else nothing
        <div className={`fix-footer ${slideUp ? 'active' : ''}`}>
            {/* if onclick update setSlideup the opposite of slideup */}
            <div onClick={() => setSlideUp(!slideUp)} className="slide-up-btn"></div>

            <div className="d-visibility"></div>

            <div className="mini-player flex justify-sb align-center">
                <div className="flex">
                    <div className="artist-cover-img">
                        <img alt=""/>
                    </div>
                    <div className="mini-player-info mlr-10">
                        <p>Beyond the line</p>
                        <p>Rizwan Khan</p>
                    </div>
                </div>
                <div className="mini-player-control flex">
                    <button>
                        <img src={playGreyIcon} alt=""/>
                    </button>
                    <button>
                        <img src={closeIcon} alt=""/>
                    </button>
                </div>
            </div>

            {/* navigation menu */}
            <div className="navigation-menu flex justify-evenly">
                <a href="#home">
                    <div>
                        <img src={homeIcon} alt="" />
                    </div>
                    <div>
                        <span>Home</span>
                    </div>
                </a>

                <a href="#profile">
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