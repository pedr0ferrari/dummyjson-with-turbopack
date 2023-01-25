import { UserType } from "@/pages";
import Image from "next/image";
import React from "react";

const TableRow: React.FC<{ user: UserType }> = ({ user }) => {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{user.id}</div>
          </div>
        </div>
      </td>
      <td className="flex items-center gap-2">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <Image
              src={user.avatarURL}
              alt={`${user.firstName}'s avatar`}
              width={48}
              height={48}
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
        {user.userName}
      </td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default TableRow;
