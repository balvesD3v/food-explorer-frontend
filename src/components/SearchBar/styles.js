import styled from "styled-components";

export const SearchBar = styled.div`
  gap: 1em;
  width: 100%;
  display: flex;
  justify-content: center;

  input {
    border-radius: 5px;
    text-align: center;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.dark.dark_900};
    width: 100%;
    padding: 12px 14px;
    color: #fff;
    position: relative;
    transition: 250ms ease-in-out;
    outline: none;

    &:focus-within {
      box-shadow: 0 0 0 3px ${({ theme }) => theme.COLORS.tints.cake_100};
    }
  }

  span {
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.white.light_500};
  }
`;
