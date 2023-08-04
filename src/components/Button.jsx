import { buttonBgStyles,buttonTextColor } from "../utilities/tailwindUtils";
import PropTypes from 'prop-types';

const Button = ({color, textColor}) => {
  const buttonBgClass = buttonBgStyles(color);
  const buttonTextClass = buttonTextColor(textColor)
  return (
    <div>
      <button className={`rounded ${buttonBgClass} w-24 sm:w-32 md:w-40 h-10 ${buttonTextClass}`}>test</button>
    </div>
  );
};

Button.propTypes = {
    color: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
};

export default Button;
