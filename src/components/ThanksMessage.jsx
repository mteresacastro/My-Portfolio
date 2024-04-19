import '../styles/thanksMessage.scss';
import PropTypes from 'prop-types';

function ThanksMessage({ flowerShow }) {

    return (
        <div className={flowerShow ? 'showPetals' : 'hiddenPetals'}>
            <div className='sakura'><img className="petal" src="../src/images/sakura5.png" alt="petal sakura5" /></div>
            <div className='sakura'><img className="petal" src="../src/images/sakura3.png" alt="petal sakura3" /></div>
            <div className='sakura'><img className="petal" src="../src/images/sakura2.png" alt="petal sakura2" /></div>
            <div className='sakura'><img className="petal" src="../src/images/sakura4.png" alt="petal sakura4" /></div>
            <div className='sakura'><img className="petal" src="../src/images/sakura3.png" alt="petal sakura3" /></div>
            <div className='sakura'><img className="petal" src="../src/images/sakura1.png" alt="petal sakura1" /></div>
            <div className='sakura'><img className="petal" src="../src/images/sakura2.png" alt="petal sakura2" /></div>
            <div className='sakura'><img className="petal" src="../src/images/sakura3.png" alt="petal sakura3" /></div>
            <div className='sakura'><img className="petal" src="../src/images/sakura3.png" alt="petal sakura3" /></div>
            <div className='sakura'><img className="petal" src="../src/images/sakura1.png" alt="petal sakura1" /></div>
            <div className='sakura'><img className="petal" src="../src/images/sakura1.png" alt="petal sakura1" /></div>
            <div className='sakura'><img className="petal" src="../src/images/sakura3.png" alt="petal sakura3" /></div>

        </div>
    );
}

ThanksMessage.propTypes = {
    flowerShow: PropTypes.bool.isRequired
};

export default ThanksMessage;

