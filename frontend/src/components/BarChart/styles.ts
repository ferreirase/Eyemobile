import styled, { css } from 'styled-components';

interface ContainerProps {
  isHidden: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  top: 25px;

  ${props =>
    props.isHidden &&
    css`
      visibility: hidden;
    `}
`;
