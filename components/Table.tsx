import { UserType } from "@/pages";
import TableRow from "./TableRow";

export const Table: React.FC<{ users: UserType[] }> = ({ users }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>id</th>
            <th>user name</th>
            <th>email</th>
            <th>phone</th>
            <th></th>
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
            <th></th>
            <th>id</th>
            <th>user name</th>
            <th>email</th>
            <th>phone</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
