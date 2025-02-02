import { Status } from "@/types";
import { updateFeatureStatus } from "@/utils/api";

type ActionData = {
  id: number;
  status: Status;
};

const updateStatus = async (_: Status, { id, status }: ActionData) => {
  const newStatus = await updateFeatureStatus(id, status);
  return newStatus.status;
};

export default updateStatus;
