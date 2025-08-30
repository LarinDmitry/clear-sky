import React, {useMemo, FC} from 'react';
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface Props {
  data: {
    damageByDay: number[];
    date: string;
  }[];
  title: string;
}

const BarChart: FC<Props> = ({data, title}) => {
  const chartData = useMemo(
    () => ({
      labels: data[0]?.damageByDay.map((_item: number, idx: number) => `День ${idx + 1}`),
      datasets: data.map(({damageByDay, date}, i) => ({
        label: date,
        data: damageByDay.map((item) => item / 1e9),
        backgroundColor: `rgba(${50 + i * 50}, 99, 160, 0.9)`,
        borderColor: `rgba(${50 + i * 50}, 99, 160, 1)`,
        borderWidth: 1,
        borderRadius: 4,
      })),
    }),
    [data]
  );

  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        datalabels: {
          display: false,
        },
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: title,
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: (tooltipItem: any) => `${tooltipItem.dataset.label}: ${tooltipItem.raw.toFixed(2)} млрд`,
          },
        },
      },
      scales: {
        x: {
          stacked: false,
        },
        y: {
          beginAtZero: true,
        },
      },
    }),
    [title]
  ) as any;

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
