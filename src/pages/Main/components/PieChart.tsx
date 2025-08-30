import React, {FC, useMemo} from 'react';
import styled from 'styled-components';
import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {backgroundColor, hoverBackgroundColor, localization} from 'pages/Main/MainUtils';
import {globalLocalization} from 'services/GlobalUtils';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface Props {
  total: number;
  data: {
    name: string;
    damage: number;
  }[];
}

const PieChart: FC<Props> = ({data, total}) => {
  const sortedData = useMemo(() => [...data].sort((a, b) => b.damage - a.damage), [data]);
  const {language} = useAppSelector(selectUserConfiguration);
  const {DIAGRAM} = localization(language);
  const {DAMAGE} = globalLocalization(language);

  const chartData = useMemo(
    () => ({
      labels: sortedData.map(({name}) => name),
      datasets: [
        {
          label: DAMAGE,
          data: sortedData.map(({damage}) => damage),
          backgroundColor,
          hoverBackgroundColor,
        },
      ],
    }),
    [sortedData, DAMAGE]
  );

  const options = useMemo(
    () => ({
      plugins: {
        datalabels: false,
        title: {
          display: true,
          text: DIAGRAM,
        },
        tooltip: {
          callbacks: {
            label: ({label, raw}: any) => `${label}: ${raw.toLocaleString()} (${((raw / total) * 100).toFixed(3)}%)`,
          },
        },
        legend: {
          display: true,
          position: 'bottom' as const,
        },
      },
    }),
    [total, DIAGRAM]
  ) as any;

  return (
    <Wrapper>
      <Pie data={chartData} options={options} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
`;

export default PieChart;
