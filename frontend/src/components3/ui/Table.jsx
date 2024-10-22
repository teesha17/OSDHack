// src/components/ui/Table.jsx
import React from "react";

export const Table = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        {children}
      </table>
    </div>
  );
};

export const TableHeader = ({ children }) => {
  return (
    <thead className="bg-gray-200">
      <tr>{children}</tr>
    </thead>
  );
};

export const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableRow = ({ children }) => {
  return <tr className="hover:bg-gray-100">{children}</tr>;
};

export const TableHead = ({ children }) => {
  return (
    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold">
      {children}
    </th>
  );
};

export const TableCell = ({ children }) => {
  return (
    <td className="py-2 px-4 border-b border-gray-300 text-sm">
      {children}
    </td>
  );
};
