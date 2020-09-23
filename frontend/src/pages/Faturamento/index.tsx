/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { useStore } from 'react-redux';
import Header from '../../components/Header';
import SideBarComponent from '../../components/SideBar';
import Table from '../../components/Table';
import DonutChart from '../../components/DonutChart';
import BarChart from '../../components/BarChart';

import {
  ContainerNavigations,
  TotaisIcon,
  ClientesIcon,
  TotaisContainer,
  ClientesContainer,
  ChartsContainer,
  ChartsContainerTitles,
} from './styles';

const Dashboard: React.FC = () => {
  const [selectedTotais, setSelectedTotais] = useState(true);
  const [selectedClientes, setSelectedClientes] = useState(false);
  const { transactions } = useStore().getState();
  const amountDespesas = Number(
    transactions
      .filter((transaction: any) => transaction.type === 'Despesas')
      .map((transaction: any) => transaction.amount)
      .reduce((current: number, accumulator: number) => current + accumulator)
      .toFixed(2),
  );

  const amountReceitas = Number(
    transactions
      .filter((transaction: any) => transaction.type === 'Receitas')
      .map((transaction: any) => transaction.amount)
      .reduce((current: number, accumulator: number) => current + accumulator)
      .toFixed(2),
  );

  return (
    <>
      <Header page="Meu Faturamento" />
      <SideBarComponent page="Meu Faturamento" />
      <ContainerNavigations>
        <TotaisContainer
          isSelected={selectedTotais}
          onClick={() => {
            setSelectedTotais(true);
            setSelectedClientes(false);
          }}
        >
          <TotaisIcon>
            <b>$</b>
          </TotaisIcon>
          <p>TOTAIS</p>
        </TotaisContainer>

        <ClientesContainer
          isSelected={selectedClientes}
          onClick={() => {
            setSelectedTotais(false);
            setSelectedClientes(true);
          }}
        >
          <ClientesIcon />
          <p style={{ position: 'relative', top: '5px' }}>CLIENTES</p>
        </ClientesContainer>
      </ContainerNavigations>
      <Table isHidden={!selectedClientes} />
      <ChartsContainerTitles isHidden={selectedClientes}>
        <h2>VALOR TOTAL</h2>
        <h1>
          R$&nbsp;
          {Math.round(amountReceitas - amountDespesas)
            .toFixed(2)
            .toString()
            .replace('.', ',')
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
        </h1>
        <h3>SERVIÇOS</h3>
        <h3>DESPESAS X RECEITAS</h3>
      </ChartsContainerTitles>
      <ChartsContainer isHidden={!selectedClientes}>
        <DonutChart isHidden={selectedClientes} />
        <BarChart isHidden={selectedClientes} />
      </ChartsContainer>
    </>
  );
};

export default Dashboard;
