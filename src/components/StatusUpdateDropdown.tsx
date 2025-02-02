"use client";

import updateStatus from "@/actions/update-status";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Status } from "@/types";
import { startTransition, useActionState, useOptimistic } from "react";

const STATUS_COLORS = {
  提案中: "bg-gray-500",
  計画済み: "bg-cyan-500",
  進行中: "bg-purple-500",
  完了: "bg-yellow-500",
} as const;

type StatusUpdateDropdownProps = {
  currentStatus: Status;
  id: number;
};

function StatusUpdateDropdown(props: StatusUpdateDropdownProps) {
  const [status, updateStatusAction] = useActionState(
    updateStatus,
    props.currentStatus
  );
  // 楽観的更新と組み合わせることで、更新を即座に反映
  const [optimisticStatus, addOptimisticStatus] = useOptimistic(status);

  const handleUpdateStatus = (status: Status) => {
    startTransition(() => {
      addOptimisticStatus(() => status);
      updateStatusAction({ id: props.id, status });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <div
          className={`${STATUS_COLORS[optimisticStatus]} text-white text-xs px-2 py-1 rounded-full font-mono`}
        >
          {optimisticStatus}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-700 w-40">
        {(Object.keys(STATUS_COLORS) as Status[]).map((statusOption) => (
          <DropdownMenuItem
            key={statusOption}
            className="focus:bg-gray-600 hover:bg-gray-600 text-white font-mono"
            onClick={() => handleUpdateStatus(statusOption)}
          >
            <span
              className={`${STATUS_COLORS[statusOption]} w-2 h-2 rounded-full mr-2`}
            />
            {statusOption}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default StatusUpdateDropdown;
