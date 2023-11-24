import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.COLORS.tints.tomato_100};
  color: #fff;
  padding: 12px 32px;
  border-radius: 5px;
  border: none;

  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  &:hover {
    cursor: pointer;
  }
`;
