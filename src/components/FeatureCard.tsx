import { Feature } from "@/types";
import { voteForFeature } from "@/utils/api";
import { ThumbsUp } from "lucide-react";
import { startTransition, useActionState } from "react";
import StatusUpdateDropdown from "./StatusUpdateDropdown";

type FeatureCardProps = {
  feature: Feature;
};

const addVote = async (previousVotes: number, id: number) => {
  const newVotes = await voteForFeature(id, previousVotes);
  return newVotes.votes;
};

function FeatureCard({ feature }: FeatureCardProps) {
  const [votes, addVoteAction] = useActionState(addVote, feature.votes);
  // form の action={}
  const handleClick = () => {
    startTransition(() => {
      addVoteAction(feature.id);
    });
  };
  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-emerald-500 transition-colors flex gap-4">
      <button
        onClick={handleClick}
        className="flex items-center pl-4 pr-8 justify-center space-x-2 border-r border-gray-500"
      >
        <ThumbsUp className="h-6 w-6 text-emerald-500 hover:text-emerald-400" />
        <span className="font-mono text-lg">{votes}</span>
      </button>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{feature.title}</h3>
          {/* <p>{feature.status}</p> */}
          <StatusUpdateDropdown
            currentStatus={feature.status}
            id={feature.id}
          />
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
