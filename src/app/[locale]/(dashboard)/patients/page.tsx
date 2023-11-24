import CustomTable from "@/components/custom-table";
import { PatientFilter } from "@/components/patients/filter-patients";
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
    <div className="w-full">
      <PatientFilter />
      <CustomTable data={data} columns={columns} loading={false} />
    </div>
  );
}
