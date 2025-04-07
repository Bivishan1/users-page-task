import Link from "next/link";
import React from "react";
import { getUsers } from '@/lib/api';

const ProfileList = async () => {
    const users = await getUsers();

  return (
    <div>
      <table className="table-fixed border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border border-gray-400">Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2 border border-gray-400">
                {" "}
                <Link href={`/profile/${user.id}`}>{user.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileList;
