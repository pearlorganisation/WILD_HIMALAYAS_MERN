import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activityAction } from "@/features/actions/activityAction";
// import Trekking from "../../assets/images/trekking.jpg";

const Activity = () => {
  const { isLoading, data } = useSelector((state) => state.activity);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activityAction());
  }, []);

  console.log(data, "data");

  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 grid-rows-2 gap-6  place-items-center py-10 ">
        {data &&
          // data?.data &&
          data?.data.map((el, id) => (
            <div
              key={id}
              className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full"
            >
              <a href="/ourtrek">
                <img
                  src={el?.logo}
                  alt="Trekking"
                  className="h-[284px] object-cover"
                />
              </a>

              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  dark:text-white">
                    {el?.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                  {el?.description}
                </p>

                <a
                  href="/ourtrek"
                  className="inline-flex  items-center  px-3  py-2 text-sm font-medium text-center  text-white  bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Activity;
