import { Feature } from "@/types";
import { ThumbsUp } from "lucide-react";

type FeatureCardProps = {
  feature: Feature;
};

function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-emerald-500 transition-colors flex gap-4">
      <button className="flex items-center pl-4 pr-8 justify-center space-x-2 border-r border-gray-500">
        <ThumbsUp className="h-6 w-6 text-emerald-500 hover:text-emerald-400" />
        <span className="font-mono text-lg">42</span>
      </button>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{feature.title}</h3>
          <p>{feature.status}</p>
          {/* StatusUpdateDropdown */}
        </div>
        <p className="text-gray-400 font-mono text-sm mb-4">
          {feature.description}
        </p>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500 font-mono">
            {new Date(feature.timestamp).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
