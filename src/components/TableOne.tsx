import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPlacementStats } from "../services/stats";

interface TableRow {
  company: string;
  package: string;
  date: string;
  students: string;
}

interface TableData {
  columns: string[];
  rows: TableRow[];
}

const TableOne = () => {
  const [tableData, setTableData] = useState<TableData>({
    columns: ["Company", "Package", "Date of Visit", "Students Placed"],
    rows: [],
  });

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await fetchPlacementStats();
        setTableData((prevData) => ({
          ...prevData,
          rows: response,
        }));
      } catch (error) {
        console.error("Error fetching table data:", error);
      }
    };

    fetchTableData();
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Placement Stats
        </h4>

      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          {tableData.columns.map((col, index) => (
            <div
              key={index}
              className={`p-2.5 text-center ${index === 0 ? "text-left" : ""
                } xl:p-5`}
            >
              <h5 className="text-sm font-bold uppercase xsm:text-base">
                {col}
              </h5>
            </div>
          ))}
        </div>

        {tableData.rows.map((row, index) => (
          <div
            key={index}
            className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4"
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {row.Company}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{row.Package}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{new Date(row["Date of Visit"]).toDateString()}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{row["Students Placed"]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;


// import { Link } from "react-router-dom";

// const tableData = {
//   columns: [
//     "Company",
//     "Package",
//     "Date of Visit",
//     "Students Placed",
//   ],
//   rows: [
//     {
//       company: "Nomura",
//       package: "19 L",
//       date: "06/07/2024",
//       students: "12",
//     },
//     {
//       company: "ISS",
//       package: "19 L",
//       date: "06/07/2024",
//       students: "12",
//     },
//     {
//       company: "Wissen Tech",
//       package: "19 L",
//       date: "06/07/2024",
//       students: "12",
//     },
//     {
//       company: "MDA Training",
//       package: "19 L",
//       date: "06/07/2024",
//       students: "12",
//     },
//     {
//       company: "Citius Tech",
//       package: "19 L",
//       date: "06/07/2024",
//       students: "12",
//     },
//   ],
// };

// const TableOne = () => {
//   return (
//     <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
//       <div className="flex flex-row justify-between mb-6">
//         <h4 className="text-xl font-semibold text-black dark:text-white">
//           Placement Stats
//         </h4>
//         <Link
//           to="/tables/placements"
//           className="inline-flex items-center justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
//         >
//           View Details
//         </Link>
//       </div>
//       {/*View */}
//       <div className="flex flex-col">
//         <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
//           {tableData.columns.map((col, index) => (
//             <div
//               key={index}
//               className={`p-2.5 text-center ${index === 0 ? "text-left" : ""
//                 } xl:p-5`}
//             >
//               <h5 className="text-sm font-bold uppercase xsm:text-base">
//                 {col}
//               </h5>
//             </div>
//           ))}
//         </div>

//         {tableData.rows.map((row, index) => (
//           <div
//             key={index}
//             className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4"
//           >
//             <div className="flex items-center gap-3 p-2.5 xl:p-5">
//               <p className="hidden text-black dark:text-white sm:block">
//                 {row.company}
//               </p>
//             </div>

//             <div className="flex items-center justify-center p-2.5 xl:p-5">
//               <p className="text-black dark:text-white">{row.package}</p>
//             </div>

//             <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
//               <p className="text-black dark:text-white">{row.date}</p>
//             </div>

//             <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
//               <p className="text-meta-5">{row.students}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TableOne;
