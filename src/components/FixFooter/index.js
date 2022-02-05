import { useState } from "react";
import { closeIcon, homeIcon, nextIcon, playBlackIcon, playGreyIcon, prevIcon, userIcon } from "../../assets";
import "./style.css";

const FixFooter = (props) => {
  const [slideUp, setSlideUp] = useState(false);

  return (
    // here if slideup is true then active else nothing
    <div className={`fix-footer ${slideUp ? "active" : ""}`}>
      {/* if onclick update setSlideup the opposite of slideup */}
      <div onClick={() => setSlideUp(!slideUp)} className="slide-up-btn"></div>

      <div className="d-visibility"></div>

      {
        //   only if slideup ia true
          slideUp && (
              <div className="audio-player-lg">
                  <div className="audio-cover-lg-img">
                        <img  alt="" />
                  </div>

                  <div>
                      <h2>Beyond the line</h2>
                      <h3>Rizwan Khan</h3>
                  </div>

                  <div className="audio-player-progress">
                      <input 
                            type="range"
                            min={'0'}
                            max={'100'}
                      />
                  </div>

                  <div className="audio-controls flex justify-sb">
                    <button>
                        <img src={prevIcon} alt=""/>
                    </button>
                    <div className="play-pause-button">
                        <button>
                            <img src={playBlackIcon} alt=""/>
                        </button>
                    </div>
                    <button>
                        <img src={nextIcon} alt=""/>
                    </button>
                  </div>
              </div>
          )
      }

      {
        // only if slideup is false
        // then these two option will
        // be shown
        !slideUp && (
        //   here this syntax is used because there are two child inside slideup to wrap 
        //   it up
          <>
            <div className="mini-player flex justify-sb align-center mtb-10">
              <div className="flex align-center">
                <div className="artist-cover-img">
                  <img alt="" />
                </div>
                <div className="mini-player-info mlr-10">
                  <p>Beyond the line</p>
                  <p>Rizwan Khan</p>
                </div>
              </div>
              <div className="mini-player-control flex">
                <button>
                  <img src={playGreyIcon} alt="" />
                </button>
                <button>
                  <img src={closeIcon} alt="" />
                </button>
              </div>
            </div>

            {/* navigation menu */}
            <div className="navigation-menu flex justify-evenly">
              <a href="#home" className="anchor-style">
                <div>
                  <img src={homeIcon} alt="" />
                </div>
                <div>
                  <span>Home</span>
                </div>
              </a>

              <a href="#profile" className="anchor-style">
                <div>
                  <img src={userIcon} alt="" />
                </div>
                <div>
                  <span>Profile</span>
                </div>
              </a>
            </div>
          </>
        )
      }
    </div>
  );
};

export default FixFooter;
