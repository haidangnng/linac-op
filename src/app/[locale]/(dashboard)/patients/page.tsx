"use client";
import CustomTable from "@/components/custom-table";
import { PatientFilter } from "@/components/patients/filter-patients";
import { ColumnDef } from "@tanstack/react-table";
import { useCallback, useEffect, useState } from "react";
import createSupabaseBrowerClient from "@/lib/supabase/client";
import { USER_ROLE, UserType } from "@/lib/types/UserType";
import { useToast } from "@/components/ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const columns: ColumnDef<Record<string, any>>[] = [
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-0 w-8 h-8">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function PatientPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [patientList, setPatientList] = useState<UserType[]>([]);
  const [total, setTotal] = useState<number>(0);

  const handleFetchTotalPatients = useCallback(async () => {
    const supabase = createSupabaseBrowerClient();

    const { count, error } = await supabase
      .from("profile")
      .select("*", { count: "exact", head: true })
      .eq("role", USER_ROLE.PATIENT);

    if (error) {
      toast({
        title: "There's something wrong",
      });
    }

    setTotal(count || 0);
  }, [toast]);

  const handleFetchPatients = useCallback(
    async (offset: number) => {
      const supabase = createSupabaseBrowerClient();

      const { data, error } = await supabase
        .from("profile")
        .select("*", { count: "exact" })
        .eq("role", USER_ROLE.PATIENT)
        .range(offset || 0, offset + 9);

      if (error) {
        toast({
          title: "There's something wrong",
        });
      }

      setPatientList(data || []);
    },
    [toast],
  );

  useEffect(() => {
    setLoading(true);
    Promise.all([handleFetchTotalPatients(), handleFetchPatients(0)]).then(
      () => {
        setLoading(false);
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePagination = useCallback(
    (offset: number) => {
      handleFetchPatients(offset);
    },
    [handleFetchPatients],
  );

  return (
    <div className="w-full">
      <PatientFilter />
      <CustomTable
        total={total}
        data={patientList}
        onPaginate={handlePagination}
        columns={columns}
        loading={loading}
      />
    </div>
  );
}
