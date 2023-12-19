/* eslint-disable react/prop-types */
import { BrandDiv } from "./styles";

export function Brand({ logo, title }) {
  return (
    <BrandDiv>
      {logo && <img src={logo} alt="Food Explorer polygon" />}
      <h1>{title}</h1>
    </BrandDiv>
  );
}
