"use client";

import { useActionState, useState } from "react";
import FeatureCard from "./FeatureCard";
import { Feature } from "@/types";
import { STATUS_FILTERS } from "@/constants";
// 下記はこの後の手順で追加
import NewFeatureModal from "./NewFeatureModal";
import addFeature from "@/actions/add-feature";

type FeatureListProps = {
  initialFeatures: Feature[];
};

function FeatureList({ initialFeatures }: FeatureListProps) {
  const [filter, setFilter] = useState("全て");
  const [features, addFeatureAction] = useActionState(
    addFeature,
    initialFeatures
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <NewFeatureModal action={addFeatureAction} />
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex space-x-2 overflow-x-auto">
          {STATUS_FILTERS.map((status) => (
            <button
              key={status}
              className={`px-3 py-1 rounded-full text-sm hover:text-white ${
                filter === status ? "bg-gray-700 text-white" : "text-gray-300"
              }`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {features
            .filter((feature) => filter === "全て" || feature.status === filter)
            .map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureList;
