import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data=[
  {
    labels: ['Minimum','Median','Average','Maximum'],
    datasets: [
      {
        label: 'Salary',
        data: [8, 19,24, 53],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
        labels: ['ghsfd'],
      },
      
    ],
  },
  {
    labels: ['Minimum','Median','Average','Maximum'],
    datasets: [
      {
        label: 'Salary',
        data: [8, 16, 19, 43],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
        labels: ['ghsfd'],
      },
      
    ],
  },
  {
    labels: ['Minimum','Median','Average','Maximum'],
    datasets: [
      {
        label: 'Salary',
        data: [5, 9, 14, 47],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
        labels: ['ghsfd'],
      },
      
    ],
  },
  {
    labels: ['Minimum','Median','Average','Maximum'],
    datasets: [
      {
        label: 'Salary',
        data: [5, 15, 16, 27.5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
        labels: ['ghsfd'],
      },
      
    ],
  },
  {
    labels: ['Minimum','Median','Average','Maximum'],
    datasets: [
      {
        label: 'Salary',
        data: [6, 14, 16, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
        labels: ['ghsfd'],
      },
      
    ],
  },
  {
    labels: ['Minimum','Median','Average','Maximum'],
    datasets: [
      {
        label: 'Salary',
        data: [5, 10, 14, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
        labels: ['ghsfd'],
      },
      
    ],
  },
];
// export const data = {
//   labels: ['Minimum','Median','Average','Maximum'],
//   datasets: [
//     {
//       label: 'Salary',
//       data: [12, 19, 3, 5],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//       ],
//       borderWidth: 1,
//       labels: ['ghsfd'],
//     },
    
//   ],
// };

export  const PieChart=()=> {
  return (
    <>
    {data.map((i)=>(
        <Pie data={i} title='hgcgc' />
    ))};
    </>
  );
}
