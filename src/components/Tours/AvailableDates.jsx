import React, { useEffect, useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { Link, Navigate, useNavigate } from 'react-router-dom';

function formatDateRange (startDate, endDate) {
  const options = { day: 'numeric', month: 'short' };
  const start = new Date(startDate).toLocaleDateString('en-GB', options);
  const end = new Date(endDate).toLocaleDateString('en-GB', options);
  return `${start} to ${end}`;
};

const groupByMonth = (dates) => {
  return dates.reduce((acc, date) => {
    const month = new Date(date.startDate).toLocaleString('default', { month: 'long', year: 'numeric' });
    if (!acc[month]) acc[month] = [];
    acc[month].push(date);
    return acc;
  }, {});
};

const AvailableDates = ({availableDates ,data}) => {
  const navigate = useNavigate()
  const datesByMonth = groupByMonth(availableDates);
  const [visibleMonth, setVisibleMonth] = useState(null);

  const toggleMonthVisibility = (month) => {
    setVisibleMonth((prevVisibleMonth) => (prevVisibleMonth === month ? null : month));
  };

  // Get sorted months
  const sortedMonths = Object.keys(datesByMonth).sort((a, b) => {
    return new Date(a) - new Date(b);
  });


  return (
    <div className="available-dates p-4 border rounded-md">
      {sortedMonths.map((month) => (
        <div key={month}>
          <div 
            className="font-bold text-lg my-2 flex justify-between items-center cursor-pointer"
            onClick={() => toggleMonthVisibility(month)}
          >
            {month}
            <span className="ml-2">{visibleMonth === month ? <IoIosArrowDropup/> : <IoIosArrowDropdown/> }</span>
          </div>
          {visibleMonth === month && (
            <div>
              {datesByMonth[month].map((date) => (
                <div key={date._id} className="flex justify-between items-center py-1">
                  <span>{formatDateRange(date.startDate, date.endDate)}</span>
                  <button
                   onClick={()=>{
                    navigate("/order", {state: {dates: formatDateRange(date.startDate, date.endDate), ...data}})
                   }} className="text-white rounded-md px-1 font-medium bg-green-700 hover:bg-green-600 cursor-pointer">Book Now
                   </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AvailableDates;
