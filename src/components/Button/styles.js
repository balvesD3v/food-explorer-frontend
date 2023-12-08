import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonStyled = styled(Link)`
  background-color: ${({ theme, isDelete }) =>
    isDelete ? theme.COLORS.dark.dark_800 : theme.COLORS.tints.tomato_100};

  display: flex;
  justify-content: center;

  text-decoration: none;
  color: #fff;
  padding: 12px 32px;
  border-radius: 5px;
  border: none;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  transition: 100ms linear;

  && {
    font-size: 16px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.tints.tomato_300};
  }
`;
