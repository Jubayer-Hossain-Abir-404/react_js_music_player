import { backIcon } from '../../assets';
import './style.css';

const AudioList = props => {
    return (
        <div className="audio-ls m-20">
            <div className="audio-ls-header">
                {/* AudioList */}
                <img src={ backIcon } alt=""/>
            </div>

            <ul>
                <li className="audio-ls-container">
                    <div className="audio-ls-item">
                        <div className="audio-img">
                            <img src="" alt=""/>
                        </div>
                        <div className="audio-info">
                            
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default AudioList;
