import CustomTable from "@/components/custom-table";
import { ColumnDef } from "@tanstack/react-table";

export default function PatientPage() {
  const data: Record<string, any>[] = [{}];

  const columns: ColumnDef<Record<string, any>>[] = [
    {
      accessorKey: "id",
      header: "Order ID",
    },
  ];

  return (
    <div>
      <CustomTable data={data} columns={columns} loading={false} />
    </div>
  );
}
