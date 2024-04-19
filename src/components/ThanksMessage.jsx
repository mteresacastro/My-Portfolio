import '../styles/thanksMessage.scss';
import PropTypes from 'prop-types';

import sakura1 from "../../src/images/sakura1.png"
import sakura2 from "../../src/images/sakura2.png"
import sakura3 from "../../src/images/sakura3.png"
import sakura4 from "../../src/images/sakura4.png"
import sakura5 from "../../src/images/sakura5.png"


function ThanksMessage({ flowerShow }) {

    return (
        <div className={flowerShow ? 'showPetals' : 'hiddenPetals'}>
            <div className='sakura'><img className="petal" src={sakura5} alt="petal sakura5" /></div>
            <div className='sakura'><img className="petal" src={sakura3} alt="petal sakura3" /></div>
            <div className='sakura'><img className="petal" src={sakura2} alt="petal sakura2" /></div>
            <div className='sakura'><img className="petal" src={sakura4} alt="petal sakura4" /></div>
            <div className='sakura'><img className="petal" src={sakura3} alt="petal sakura3" /></div>
            <div className='sakura'><img className="petal" src={sakura1} alt="petal sakura1" /></div>
            <div className='sakura'><img className="petal" src={sakura2} alt="petal sakura2" /></div>
            <div className='sakura'><img className="petal" src={sakura5} alt="petal sakura5" /></div>
            <div className='sakura'><img className="petal" src={sakura3} alt="petal sakura3" /></div>
            <div className='sakura'><img className="petal" src={sakura1} alt="petal sakura1" /></div>
            <div className='sakura'><img className="petal" src={sakura1} alt="petal sakura1" /></div>
            <div className='sakura'><img className="petal" src={sakura3} alt="petal sakura3" /></div>

        </div>
    );
}

ThanksMessage.propTypes = {
    flowerShow: PropTypes.bool.isRequired
};

export default ThanksMessage;

