import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { fetchInternshipData } from '../services/dashboard';

const InternshipChart: React.FC = () => {
  const [chartData, setChartData] = useState<{
    student_count: number[];
    stipend: number[];
    companies: string[];
  }>({
    student_count: [],
    stipend: [],
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
        const data = await fetchInternshipData();
        setChartData({
          student_count: data.student_count,
          stipend: data.stipend,
          companies: data.companies,
        });
      } catch (error) {
        console.error('Failed to fetch internship chart data:', error);
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
          Loading Department Internship Stats...
        </h4>
      </div>
    );
  }

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Department Internship Stats
          </h4>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ReactApexChart
            options={options}
            series={[
              { name: 'Stipend (in 10000s)', data: chartData.stipend },
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

export default InternshipChart;

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
//     categories: ['ISS', 'Nomura', 'Wissen', 'MDA Training', 'Citius Tech', 'Accolite'],
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

// const InternshipChart: React.FC = () => {
//   const [state, setState] = useState<ChartTwoState>({
//     series: [
//       {
//         name: 'Stipend (in 10000s)',
//         data: [6, 7.5, 2.5, 2.5, 2.5, 2],
//       },
//       {
//         name: 'Number of Students',
//         data: [2, 2, 1, 2, 12, 3],
//       },
//     ],
//   });

//   return (
//     <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
//       <div className="mb-4 justify-between gap-4 sm:flex">
//         <div>
//           <h4 className="text-xl font-semibold text-black dark:text-white">
//             Department Internship Stats
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

// export default InternshipChart;
