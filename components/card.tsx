import Link from "next/link";

interface CardProps {
  item: string;
}

export default function Card({ item }: CardProps) {
  return (
    <Link
      href={"/" + item.toLocaleLowerCase()}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors   hover:bg-cyan-50 hover:bg-cyan-50:bg-opacity-30"
      rel="noopener noreferrer"
    >
      <h2
        className={` text-2xl font-semibold text-center group-hover:text-gray-800`}
      >
        {item}
      </h2>
    </Link>
  );
}
