import { UserType } from "@/interface/UserType";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const TableRow: React.FC<{ user: UserType }> = ({ user }) => {
  const router = useRouter();

  return (
    <tr>
      <td className="hidden md:table-cell">
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{user.id}</div>
          </div>
        </div>
      </td>
      <td className="flex items-center gap-2">
        <div className="avatar">
          <div className="w-12 h-12 mask mask-squircle">
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
      <td className="hidden md:table-cell">{user.email}</td>
      <td className="hidden md:table-cell">{user.phone}</td>
      <th>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => {
            router.push(`/users/${user.id}`);
          }}
        >
          details
        </button>
      </th>
    </tr>
  );
};

export default TableRow;
