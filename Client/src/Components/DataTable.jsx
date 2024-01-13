/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

const DataTable = ({ data }) => {
  const itemsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className=" h-full">
      <div className="shadow-lg border bg-white rounded-xl h-[85%]">
        <table className="w-full h-full">
          <thead className="h-12">
            <tr className="h-[3rem]">
              <th className="border text-left px-4 ">ID</th>
              <th className="border text-left px-4 ">Name</th>
              <th className="border text-left px-4 ">Quantity</th>
              <th className="border text-left px-4 ">Price</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr
                key={item.id}
                className={`h-[1rem] ${
                  item.id % 2 === 1 ? "bg-gray-100" : ""
                } `}
              >
                <td className="border text-left px-4 h-[1rem]">{item.id}</td>
                <td className="border text-left px-4 h-[1rem]">{item.name}</td>
                <td className="border text-left px-4 h-[1rem]">
                  {item.quantity}
                </td>
                <td className="border text-left px-4 h-[1rem]">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="h-[15%] flex items-center justify-center gap-3">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-sm p-2 h-7 flex items-center bg-white text-gray-400"
        >
          <FaChevronLeft />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`rounded-sm p-2 h-7 flex items-center ${
              currentPage === index + 1
                ? "bg-white text-black border border-black"
                : "bg-white text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-sm p-2 h-7 flex items-center bg-white text-gray-400 "
        >
          <FaChevronLeft className="rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default DataTable;
