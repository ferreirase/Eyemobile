import React from 'react';
import Chart from 'react-apexcharts';
import { useStore } from 'react-redux';
import { Container } from './styles';

interface ChartProps {
  isHidden: boolean;
}

const ChartComponent: React.ElementType = ({ isHidden }: ChartProps) => {
  // const teste = ['Banho e Tosa', 'Consultas', 'Medicamentos'];
  const { transactions } = useStore().getState();
  const labelsChart = transactions
    .map((transaction: any) => transaction.type)
    .filter((x: any, i: any, a: any) => a.indexOf(x) === i);

  const [amountDespesas] = transactions
    .filter((transaction: any) => transaction.type === 'Despesas')
    .map((transaction: any) => transaction.amount);

  const amountReceitas = transactions
    .filter((transaction: any) => transaction.type === 'Receitas')
    .map((transaction: any) => transaction.amount)
    .reduce((current: number, accumulator: number) => current + accumulator)
    .toFixed(2);

  const valuesChart = [amountReceitas, amountDespesas];

  console.log(amountDespesas);

  const state = {
    series: [
      {
        data: valuesChart,
      },
    ],
    options: {
      tooltip: {
        theme: 'dark',
        y: {
          title: {
            formatter: () => '',
          },
        },
      },
      colors: ['#09cfa3', '#E0300A'],
      chart: {
        height: 400,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '20%',
          distributed: true,
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
      },
      xaxis: {
        categories: labelsChart,
        labels: {
          style: {
            fontSize: '0px',
          },
        },
      },
    },
  };

  return (
    <Container isHidden={isHidden}>
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="350"
          />
        </div>
      </div>
    </Container>
  );
};

export default ChartComponent;
