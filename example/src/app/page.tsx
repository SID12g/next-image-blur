import StaticPage from "./static/page";
import DynamicPage from "./dynamic/page";

export default function Home() {
  return (
    <div className="flex justify-between">
      <StaticPage />
      <DynamicPage />
    </div>
  );
}
