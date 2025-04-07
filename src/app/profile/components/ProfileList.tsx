import React from 'react'


interface Users {
    id: number;
    name: string;
    email: string;
  }

const ProfileList = async () => {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        // {cache: 'no-store'}
        { next: { revalidate: 10 } } //next.js gonna run background job and get fresh data from backend every 10 seconds.
      );
      const users: Users[] = await res.json();


  return (
    <div>
          <table className="table-fixed border-collapse border border-gray-400">
        <thead>
        <tr className="bg-gray-100">
            <th className="px-4 py-2 border border-gray-300">Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2 border border-gray-300">{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProfileList