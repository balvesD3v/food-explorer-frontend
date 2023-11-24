/* eslint-disable react/prop-types */

import { DivStyled, InputWrapper } from "./styles";

export const InputLabel = ({ icon: Icon, label, placeholder }) => {
  return (
    <DivStyled>
      {label && <label htmlFor="name">{label}</label>}
      <InputWrapper className="input-container">
        {Icon && <Icon className="input-icon" />}
        <input type="text" placeholder={placeholder} id="name" />
      </InputWrapper>
    </DivStyled>
  );
};
