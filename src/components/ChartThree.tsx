import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { fetchCAtegoryWiseData } from '../services/dashboard';

interface ChartThreeState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    type: 'donut',
  },
  colors: ['#10B981', '#375E83', '#259AE6', '#FFA70B'],
  labels: ['Elite', 'Super Dream', 'Dream', 'Normal'],
  legend: {
    show: true,
    position: 'bottom',
  },

  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ChartThree: React.FC = () => {
  const [state, setState] = useState<ChartThreeState>({
    series: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchCAtegoryWiseData(); // Call Axios function
        setState({ series: data.categoryData }); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching ChartThree data:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return (
      <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
        <h5 className="text-xl font-semibold text-black dark:text-white">
          Loading Category Wise Stats...
        </h5>
      </div>
    );
  }

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Category Wise Stats
          </h5>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart options={options} series={state.series} type="donut" />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span>Elite</span>
              <span>{state.series[0] || 0} students</span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span>Super Dream</span>
              <span>{state.series[1] || 0} students</span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span>Dream</span>
              <span>{state.series[2] || 0} students</span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span>Normal</span>
              <span>{state.series[3] || 0} students</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartThree;

// const ChartThree: React.FC = () => {
//   const [state, setState] = useState<ChartThreeState>({
//     series: [0, 20.6, 64.25, 15.15],
//   });

//   return (
//     <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
//       <div className="mb-3 justify-between gap-4 sm:flex">
//         <div>
//           <h5 className="text-xl font-semibold text-black dark:text-white">
//             Category Wise Stats
//           </h5>
//         </div>
//       </div>

//       <div className="mb-2">
//         <div id="chartThree" className="mx-auto flex justify-center">
//           <ReactApexChart
//             options={options}
//             series={state.series}
//             type="donut"
//           />
//         </div>
//       </div>

//       <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
//         <div className="w-full px-8 sm:w-1/2">
//           <div className="flex w-full items-center">
//             <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
//             <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
//               <span> Elite </span>
//               <span> 0 students </span>
//             </p>
//           </div>
//         </div>
//         <div className="w-full px-8 sm:w-1/2">
//           <div className="flex w-full items-center">
//             <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
//             <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
//               <span> Super Dream </span>
//               <span>14 students</span>
//             </p>
//           </div>
//         </div>
//         <div className="w-full px-8 sm:w-1/2">
//           <div className="flex w-full items-center">
//             <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
//             <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
//               <span> Dream </span>
//               <span> 42 students </span>
//             </p>
//           </div>
//         </div>
//         <div className="w-full px-8 sm:w-1/2">
//           <div className="flex w-full items-center">
//             <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
//             <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
//               <span> Normal </span>
//               <span> 10 students </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChartThree;
