import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const QuestsContainer = styled.ul`
    width: calc(85% - 256px);
    display: flex;
    flex-direction: column;
    text-decoration: none;
    margin-left: 20%;
`;

export const ViewDetails = styled.button`
      width: 100px;
      height: 50px;
      text-align: center;
`;

export const StyledNavQuests = styled(NavLink).attrs(() => ({
      activeClassName,
  }))`
      text-decoration: none;
      color: ${(({ theme }) => theme.color.green)};
      padding: 15px;
  
      &.${activeClassName} {
          font-weight: bold;
      }
  `;
  