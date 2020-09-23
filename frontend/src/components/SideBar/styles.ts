import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import IconDashboard from '../../assets/dashboard.svg';
import IconCadastro from '../../assets/cadastro.svg';

export const SideBar = styled.div`
  height: 100vh;
  width: 100px;
  background-color: #09cfa3;
  position: fixed;
`;

export const LogoContainer = styled.div`
  height: 100px;
  width: 100px;
  background: url(${logo}) no-repeat center;
`;

export const ContainerDashboard = styled.div`
  height: 110px;

  p {
    position: relative;
    font-size: 12px;
    text-align: center;
    top: 20px;
  }
`;

export const IconDashboardContainer = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  margin: 0 auto;
  top: 25px;
  background: url(${IconDashboard}) no-repeat center;
`;

export const ContainerCadastro = styled.div`
  height: 110px;
  color: #049c7a;

  p {
    position: relative;
    font-size: 12px;
    text-align: center;
    top: 20px;
  }
`;

export const IconCadastroContainer = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  margin: 0 auto;
  top: 25px;
  background: url(${IconCadastro}) no-repeat center;
`;
