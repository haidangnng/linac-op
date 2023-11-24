import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { PaginationType } from "@/lib/types/PaginationType";

export type PaginationProps = {
  total: number;
  onPaginate: (offset: number) => void;
};

export default function Pagination({ total, onPaginate }: PaginationProps) {
  const [pagination, setPagination] = useState<PaginationType>({
    offset: 0,
    limit: 10,
  });

  const totalPages = useMemo(
    () => (total === 0 ? 1 : Math.ceil(total / pagination.limit)),
    [total, pagination.limit],
  );

  const handleUpdatePagination = useCallback(
    (offset: number) => {
      setPagination({
        ...pagination,
        offset,
      });
    },
    [pagination],
  );

  const currentPage = useMemo(
    () => Math.floor(pagination.offset / pagination.limit) + 1,
    [pagination],
  );

  const displayPages = useMemo(() => {
    if (totalPages === 1) return [currentPage];
    if (currentPage === 1)
      return [
        currentPage,
        currentPage + 1,
        ...(currentPage + 2 <= totalPages ? [currentPage + 2] : []),
      ];
    if (currentPage === totalPages)
      return [
        ...(currentPage - 2 >= 1 ? [currentPage - 2] : []),
        currentPage - 1,
        currentPage,
      ];
    return [currentPage - 1, currentPage, currentPage + 1];
  }, [currentPage, totalPages]);

  const handlePageClick = useCallback(
    (page: number) => {
      let updatedOffset = page * pagination.limit;
      handleUpdatePagination(updatedOffset);
      onPaginate(updatedOffset);
    },
    [handleUpdatePagination, onPaginate, pagination.limit],
  );

  const handlePrev = useCallback(() => {
    let updatedOffset = pagination.offset - pagination.limit;
    handleUpdatePagination(updatedOffset);
    onPaginate(updatedOffset);
  }, [pagination.offset, pagination.limit, handleUpdatePagination, onPaginate]);

  const handleNext = useCallback(() => {
    let updatedOffset = pagination.offset + pagination.limit;
    handleUpdatePagination(updatedOffset);
    onPaginate(updatedOffset);
  }, [pagination.offset, pagination.limit, handleUpdatePagination, onPaginate]);

  return (
    <div className="flex gap-2 justify-center items-center w-full">
      <div className="w-6">
        {currentPage > 1 && (
          <Button
            className="p-0 hover:bg-background hover:text-primary"
            onClick={handlePrev}
            variant="ghost"
            type="button"
          >
            <ChevronLeft className="cursor-pointer" />
          </Button>
        )}
      </div>
      <div className="flex gap-1">
        {displayPages.map((page, index) => (
          <Button
            key={index}
            className={cn("!rounded-[0.5rem] ", {
              "hover:text-primary hover:bg-background": page !== currentPage,
            })}
            variant={page === currentPage ? "default" : "ghost"}
            onClick={() => page !== currentPage && handlePageClick(page - 1)}
            type="button"
          >
            {page}
          </Button>
        ))}
      </div>
      <div className="w-6">
        {currentPage < totalPages && (
          <Button
            onClick={handleNext}
            className="p-0 hover:bg-background hover:text-primary"
            variant="ghost"
            type="button"
          >
            <ChevronRight className="cursor-pointer" />
          </Button>
        )}
      </div>
    </div>
  );
}
