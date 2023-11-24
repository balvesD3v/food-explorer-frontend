/* eslint-disable react/prop-types */

import { DivStyled } from "./styles";

export const InputLabel = ({ label, placeholder }) => {
  return (
    <DivStyled>
      <label htmlFor="name">{label}</label>
      <input type="text" placeholder={placeholder} id="name" />
    </DivStyled>
  );
};
