import { useEffect, useState } from "react";
import { fetchCompanies } from "../services/dashboard";

const CardThree = () => {

  const [companyCount, setCount] = useState(0);

  useEffect(() => {
    const getCompanyCount = async () => {
      try {
        const data = await fetchCompanies();
        setCount(data);
      } catch (err) {
      } finally {
      }
    };

    getCompanyCount();
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <svg
          className="fill-primary dark:fill-white"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g strokeWidth="0" />
          <g strokeLinecap="round" strokeLinejoin="round" />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M323.5-192h-9a1.5,1.5,0,0,0-1.5,1.5V-176h12v-14.5A1.5,1.5,0,0,0,323.5-192ZM318-177v-3h2v3Zm6,0h-3v-3.5a.5.5,0,0,0-.5-.5h-3a.5.5,0,0,0-.5.5v3.5h-3v-13.5a.5.5,0,0,1,.5-.5h9a.5.5,0,0,1,.5.5Zm-8-12h2v2h-2Zm4,0h2v2h-2Zm-4,4h2v2h-2Zm4,0h2v2h-2Z"
              transform="translate(-310 192)"
            ></path>{" "}
          </g>
        </svg>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {companyCount}
          </h4>
          <span className="text-sm font-medium">{companyCount > 1 ? "Companies so far" : "Company so far"}</span>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
