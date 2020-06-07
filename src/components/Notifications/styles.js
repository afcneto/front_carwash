import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        widht: 8px;
        height: 8px;
        background: red;
        content: '0';
        border-radius: 50%;
      }
    `}
`;
