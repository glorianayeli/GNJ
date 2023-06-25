interface CardProps {
  item: string;
}

export default function Card({ item }: CardProps) {
  return (
    <a
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors   hover:bg-cyan-50 hover:bg-cyan-50:bg-opacity-30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2
        className={` text-2xl font-semibold text-center group-hover:text-gray-800`}
      >
        {item}
      </h2>
    </a>
  );
}
