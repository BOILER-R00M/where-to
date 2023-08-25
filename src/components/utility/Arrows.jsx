import doubleDownArrow from "../../assets/doubleDown.svg"
import doubleUpArrow from "../../assets/doubleUp.svg"

const Arrows = ({ slideUp, handleSlideUp, setIsAbsolute }) => {
  return (
    <div>
      <img
        src={slideUp ? doubleDownArrow : doubleUpArrow}
        alt={slideUp ? "DoubleDown" : "Double Up Arrow"}
        className="w-10 mb-4 cursor-pointer h-9 lg:hidden"
        onClick={() => {
          handleSlideUp()
          setIsAbsolute(prev => !prev)
        }}
      />
    </div>
  );
};

export default Arrows;
