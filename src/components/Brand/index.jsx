/* eslint-disable react/prop-types */
import { BrandDiv } from "./styles";

function Brand({ logo, title }) {
  return (
    <BrandDiv>
      {logo && <img src={logo} alt="Food Explorer polygon" />}
      <h1>{title}</h1>
    </BrandDiv>
  );
}

export default Brand;
