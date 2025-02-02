import { fetchFeatures } from "@/utils/api";

export default async function Home() {
  const features = await fetchFeatures();
  console.log(features);

  return (
    <main className="min-h-screen pb-8 pt-16 max-w-4xl mx-auto space-y-8">
      <header className="flex flex-col items-center text-center space-y-8">
        <h1 className="text-6xl font-bold">Roadmap Voting App</h1>
        <p className="text-gray-300">
          新機能を提案し、投票できるロードマップ管理アプリです。
          <br />
          ユーザーと開発者が繋がり、開発サイクルを早めます！
        </p>
      </header>
      {/* FeatureList コンポーネントは後ほど追加 */}
    </main>
  );
}
