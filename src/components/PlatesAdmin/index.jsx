/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { FaAngleRight } from "react-icons/fa6";
import { DivInfo, DivStyled, EditButton } from "./styles";

function PlatesAdmin({ name, description, price, image }) {
  return (
    <>
      <DivStyled>
        <EditButton to={"/edit"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M13.7514 4.81033L21.1896 12.2486M7.99997 25H2.06262C1.7808 25 1.51052 24.888 1.31124 24.6888C1.11196 24.4895 1.00001 24.2192 1.00001 23.9374V18C0.999523 17.8621 1.02626 17.7253 1.07868 17.5977C1.1311 17.4701 1.20818 17.354 1.30551 17.2562L17.2447 1.31701C17.3436 1.21661 17.4614 1.13687 17.5914 1.08245C17.7214 1.02803 17.8609 1 18.0018 1C18.1427 1 18.2822 1.02803 18.4122 1.08245C18.5422 1.13687 18.66 1.21661 18.7589 1.31701L24.683 7.24107C24.7834 7.33995 24.8631 7.45781 24.9175 7.58779C24.972 7.71777 25 7.85727 25 7.99819C25 8.1391 24.972 8.27861 24.9175 8.40859C24.8631 8.53857 24.7834 8.65642 24.683 8.7553L8.7438 24.6945C8.64599 24.7918 8.52994 24.8689 8.40231 24.9213C8.27467 24.9737 8.13795 25.0005 7.99997 25Z"
              stroke="#E1E1E6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </EditButton>
        <img src={image} alt="Plate" />
        <DivInfo>
          <h3>
            {name}
            <FaAngleRight className="arrow-right" />
          </h3>

          <p>{description}</p>
          <span>{price}</span>
        </DivInfo>
      </DivStyled>
    </>
  );
}

export default PlatesAdmin;
