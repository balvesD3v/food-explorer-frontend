import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.COLORS.tints.tomato_100};
  color: #fff;
  padding: 12px 32px;
  border-radius: 5px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;

  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  transition: 100ms linear;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.tints.tomato_300};
  }
`;
