/* eslint-disable react/prop-types */

import { DivStyled, InputWrapper } from "./styles";

export const InputLabel = ({ icon: Icon, label, placeholder, type }) => {
  return (
    <DivStyled>
      {label && <label>{label}</label>}
      <InputWrapper className="input-container">
        {Icon && <Icon className="input-icon" />}
        <input type={type} placeholder={placeholder} />
      </InputWrapper>
    </DivStyled>
  );
};
