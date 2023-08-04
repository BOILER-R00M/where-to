import { buttonStyles, paddingStyles } from "../utilities/tailwindUtils";
import PropTypes from 'prop-types';

const Button = ({color, paddingSize}) => {
  const buttonClass = buttonStyles(color);
  const paddingClass = paddingStyles(paddingSize);
  console.log(buttonClass)
  return (
    <div>
      <button className={`rounded ${buttonClass} ${paddingClass}`}>test</button>
    </div>
  );
};

Button.propTypes = {
    color: PropTypes.string.isRequired,
    paddingSize: PropTypes.string.isRequired, 
};

export default Button;
