import { UserType } from "@/interface/UserType";
import TableRow from "./TableRow";

export const Table: React.FC<{ users: UserType[] }> = ({ users }) => {
  return (
    <section className="flex flex-col w-full gap-8 px-8 py-4 overflow-x-auto drop-shadow-xl">
      <h1 className="text-3xl font-semibold ">users</h1>
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th className="hidden md:table-cell">id</th>
            <th>user name</th>
            <th className="hidden md:table-cell">email</th>
            <th className="hidden md:table-cell">phone</th>
            <th>user details</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return <TableRow key={user.id} user={user} />;
          })}
        </tbody>
        {/* <!-- foot --> */}
        <tfoot>
          <tr>
            <th className="hidden md:table-cell">id</th>
            <th>user name</th>
            <th className="hidden md:table-cell">email</th>
            <th className="hidden md:table-cell">phone</th>
            <th>user details</th>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};
