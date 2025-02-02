"use server";

import { Feature } from "@/types";

const BASE_URL =
  "https://my-json-server.typicode.com/b13o/roadmap-voting/features";

const fetchFeatures = async (): Promise<Feature[]> => {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch features");
  }
  return await res.json();
};

const postFeature = async (feature: Feature): Promise<Feature> => {
  console.log(feature.title + "を投稿しました！");
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(feature),
  });
  if (!res.ok) {
    throw new Error("Failed to post feature");
  }
  return await res.json();
};

const updateFeatureStatus = async (
  id: number,
  status: string
): Promise<Feature> => {
  console.log(status + "に変更しました！");
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  if (!res.ok) {
    throw new Error(
      "Failed to update feature status. Changes aren't persisted."
    );
  }
  return await res.json();
};

const voteForFeature = async (
  id: number,
  previousVotes: number
): Promise<Feature> => {
  console.log("+1 投票しました！");
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ votes: previousVotes + 1 }),
  });
  if (!res.ok) {
    throw new Error("Failed to vote for feature. Changes aren't persisted.");
  }
  return await res.json();
};

export { fetchFeatures, postFeature, updateFeatureStatus, voteForFeature };
