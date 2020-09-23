/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import {
  SideBar,
  LogoContainer,
  IconDashboardContainer,
  ContainerDashboard,
  ContainerCadastro,
  IconCadastroContainer,
} from './styles';

interface CurrentPage {
  page: string;
}

const SideBarComponent = ({ page }: CurrentPage) => {
  return (
    <SideBar>
      <LogoContainer />

      <ContainerDashboard>
        <IconDashboardContainer />
        <p>{page}</p>
      </ContainerDashboard>

      <ContainerCadastro>
        <IconCadastroContainer />
        <p>Cadastro</p>
      </ContainerCadastro>
    </SideBar>
  );
};

export default SideBarComponent;
