import styled, { css } from 'styled-components';
import iconTotais from '../../assets/totais.svg';
import iconClientes from '../../assets/clientes.svg';

interface ButtonProps {
  isSelected: boolean;
}

interface ContainerProps {
  isHidden: boolean;
}

export const ContainerNavigations = styled.div`
  position: absolute;
  height: 200px;
  width: 300px;

  top: 120px;
  left: 135px;
`;

export const TotaisContainer = styled.button<ButtonProps>`
  display: flex;
  border: none;
  background-color: transparent;
  flex-direction: row;
  color: #fff;
  margin-bottom: 10px;
  left: 110px;
  position: fixed;
  z-index: 12;

  ${props =>
    !props.isSelected &&
    css`
      opacity: 50%;
    `}

  p {
    font-weight: bold;
    letter-spacing: 1px;
    color: #737689;
    top: 5px;
    font-size: 14px;
    position: relative;
  }

  b {
    top: 3px;
    position: relative;
  }
`;

export const TotaisIcon = styled.div`
  height: 28px;
  width: 28px;
  text-align: center;
  font-weight: bold;
  background: url(${iconTotais}) no-repeat center;
  margin-right: 10px;

  p {
    position: relative;
    top: 2px;
  }
`;

export const ClientesContainer = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  top: 170px;
  border: none;
  background-color: transparent;
  left: 110px;
  position: fixed;

  ${props =>
    !props.isSelected &&
    css`
      opacity: 50%;
    `}

  p {
    color: #737689;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

export const ClientesIcon = styled.div`
  height: 28px;
  width: 28px;
  text-align: center;
  font-weight: bold;
  background: url(${iconClientes}) no-repeat center;
  margin-right: 10px;
`;

export const ChartsContainer = styled.div<ContainerProps>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 300px;
  left: 300px;
  width: 900px;
  border-top: solid 1px #c2c2c2;
  padding: 25px;

  ${props =>
    !props.isHidden &&
    css`
      visibility: hidden;
    `}
`;

export const ChartsContainerTitles = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  width: 800px;
  position: fixed;
  top: 310px;
  left: 300px;

  ${props =>
    props.isHidden &&
    css`
      visibility: hidden;
    `}

  h1 {
    position: relative;
    top: -150px;
    left: 180px;
    color: #09d0a3;
  }

  h2 {
    position: relative;
    top: -200px;
    left: 400px;
    color: #737689;
  }

  h3:first-of-type {
    left: -120px;
    position: relative;
  }

  h3 {
    color: #737689;
  }
`;
