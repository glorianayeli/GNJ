export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between p-24 grid grid-cols-4">
      <div className="grid place-items-center bg-cyan-100 min-h-full rounded-xl shadow-lg">
        <div className=" grid text-center lg:mb-0 lg:grid-rows-4 lg:text-left col-span-1 gap-y-6">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors   hover:bg-cyan-50 hover:bg-cyan-50:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2
              className={` text-2xl font-semibold text-center group-hover:text-gray-800`}
            >
              About
            </h2>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-cyan-50 hover:bg-cyan-50:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2
              className={` text-2xl font-semibold text-center group-hover:text-gray-800`}
            >
              Experience
            </h2>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-cyan-50 hover:bg-cyan-50:bg-opacity-30"
            rel="noopener noreferrer"
          >
            <h2
              className={` text-2xl font-semibold text-center group-hover:text-gray-800`}
            >
              Projects
            </h2>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-cyan-50 hover:bg-cyan-50:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2
              className={` text-2xl font-semibold text-center group-hover:text-gray-800`}
            >
              Contact
            </h2>
          </a>
        </div>
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex col-span-3">
        <p>esto debe tomar 3 columnas</p>
      </div>
    </main>
  );
}
