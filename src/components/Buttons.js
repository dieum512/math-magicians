import PropTypes from 'prop-types';

const Buttons = ({ handleClick }) => (
  <div className="btns-container">
    <button type="button" className="button" onClick={handleClick}>AC</button>
    <button type="button" className="button" onClick={handleClick}>+/-</button>
    <button type="button" className="button" onClick={handleClick}>%</button>
    <button type="button" className="button sign" onClick={handleClick}>÷</button>
    <button type="button" className="button" onClick={handleClick}>7</button>
    <button type="button" className="button" onClick={handleClick}>8</button>
    <button type="button" className="button" onClick={handleClick}>9</button>
    <button type="button" className="button sign" onClick={handleClick}>x</button>
    <button type="button" className="button" onClick={handleClick}>4</button>
    <button type="button" className="button" onClick={handleClick}>5</button>
    <button type="button" className="button" onClick={handleClick}>6</button>
    <button type="button" className="button sign" onClick={handleClick}>-</button>
    <button type="button" className="button" onClick={handleClick}>1</button>
    <button type="button" className="button" onClick={handleClick}>2</button>
    <button type="button" className="button" onClick={handleClick}>3</button>
    <button type="button" className="button sign" onClick={handleClick}>+</button>
    <button type="button" className="button zero" onClick={handleClick}>0</button>
    <button type="button" className="button" onClick={handleClick}>.</button>
    <button type="button" className="button sign" onClick={handleClick}>=</button>
  </div>
);

Buttons.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Buttons;
