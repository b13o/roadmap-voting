import { Feature } from "@/types";
import { postFeature } from "@/utils/api";

// useActionState に渡す関数では、
// 第１引数に、前の状態（state）を受け取ることが可能
// form から呼び出す場合、第２引数に、formData を受け取ることが可能
const addFeature = async (previousState: Feature[], formData: FormData) => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if (!title.trim() || !description.trim()) {
    alert("タイトルと概要は必須項目です.");
    return previousState;
  }

  const feature = {
    id: Date.now(),
    votes: 1,
    timestamp: String(new Date()),
    status: "提案中" as const,
    title,
    description,
  };
  const newFeature = await postFeature(feature);
  return [...previousState, newFeature];
};

export default addFeature;
