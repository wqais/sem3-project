import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { fetchPlacementData } from '../services/dashboard';

const PlacementChart: React.FC = () => {
  const [chartData, setChartData] = useState<{
    student_count: number[];
    package: number[];
    companies: string[];
  }>({
    student_count: [],
    package: [],
    companies: []
  });

  const [loading, setLoading] = useState(true);

  const options: ApexOptions = {
    colors: ['#3C50E0', '#80CAEE'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      type: 'bar',
      height: 66,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: '25%',
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        columnWidth: '25%',
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: chartData.companies,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      fontFamily: 'Satoshi',
      fontWeight: 500,
      fontSize: '14px',
      markers: {
        radius: 99,
      },
    },
    fill: {
      opacity: 1,
    },
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchPlacementData();
        setChartData({
          student_count: data.student_count,
          package: data.package,
          companies: data.companies,
        });
      } catch (error) {
        console.error('Failed to fetch placement chart data:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return (
      <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Loading Department Placement Stats...
        </h4>
      </div>
    );
  }

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Department Placement Stats
          </h4>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ReactApexChart
            options={options}
            series={[
              { name: 'Package', data: chartData.package },
              { name: 'Number of Students', data: chartData.student_count }
            ]}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default PlacementChart;

// import { ApexOptions } from 'apexcharts';
// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const options: ApexOptions = {
//   colors: ['#3C50E0', '#80CAEE'],
//   chart: {
//     fontFamily: 'Satoshi, sans-serif',
//     type: 'bar',
//     height: 66,
//     stacked: true,
//     toolbar: {
//       show: false,
//     },
//     zoom: {
//       enabled: false,
//     },
//   },

//   responsive: [
//     {
//       breakpoint: 1536,
//       options: {
//         plotOptions: {
//           bar: {
//             borderRadius: 0,
//             columnWidth: '25%',
//           },
//         },
//       },
//     },
//   ],
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       borderRadius: 0,
//       columnWidth: '25%',
//       borderRadiusApplication: 'end',
//       borderRadiusWhenStacked: 'last',
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },

//   xaxis: {
//     categories: ['ISS', 'Nomura', 'Wissen', 'Oracle', 'MDA Training', 'Citius Tech', 'Accolite'],
//   },
//   legend: {
//     position: 'top',
//     horizontalAlign: 'left',
//     fontFamily: 'Satoshi',
//     fontWeight: 500,
//     fontSize: '14px',

//     markers: {
//       radius: 99,
//     },
//   },
//   fill: {
//     opacity: 1,
//   },
// };

// interface ChartTwoState {
//   series: {
//     name: string;
//     data: number[];
//   }[];
// }

// const PlacementChart: React.FC = () => {
//   const [state, setState] = useState<ChartTwoState>({
//     series: [
//       {
//         name: 'Package',
//         data: [13, 13.66, 11, 9.35, 7.2, 7, 8],
//       },
//       {
//         name: 'Number of Students',
//         data: [2, 2, 1, 2, 2, 12, 3],
//       },
//     ],
//   });

//   return (
//     <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
//       <div className="mb-4 justify-between gap-4 sm:flex">
//         <div>
//           <h4 className="text-xl font-semibold text-black dark:text-white">
//             Department Placement Stats
//           </h4>
//         </div>
//       </div>

//       <div>
//         <div id="chartTwo" className="-ml-5 -mb-9">
//           <ReactApexChart
//             options={options}
//             series={state.series}
//             type="bar"
//             height={350}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlacementChart;
