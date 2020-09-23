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
  const categories = transactions
    .map((transaction: any) => transaction.product_name)
    .filter((x: any, i: any, a: any) => a.indexOf(x) === i);
  const colors = ['#d170d5', '#7f69d5', '#2E93fA', '#c65000'];

  const state = {
    options: {
      dataLabels: {
        enabled: false,
      },
      labels: categories,
      colors,
      chart: {
        type: 'donut',
        offsetX: 50,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    },
    series: [44, 55, 41],
  };

  return (
    <Container isHidden={isHidden}>
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="donut"
            width="300"
          />
        </div>
      </div>
    </Container>
  );
};

export default ChartComponent;
