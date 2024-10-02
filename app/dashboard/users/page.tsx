import { DataTable } from './components/data-table';
import { columns } from './components/columns';
import { getUsers } from './actions/user-actions';

export default async function Page() {
  const data = await getUsers();
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
