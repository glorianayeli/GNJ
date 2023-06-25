let items: string[] = ["About", "Experience", "Projects", "Contact"];
import Card from "./card";

export default function Sidebar() {
  return (
    <div className="grid place-items-center bg-cyan-200 min-h-full rounded-xl shadow-lg">
      <div className=" grid text-center lg:mb-0 lg:grid-rows-4 lg:text-left col-span-1 gap-y-6">
        {items.map((item) => (
          <Card item={item} key={item} />
        ))}
      </div>
    </div>
  );
}
