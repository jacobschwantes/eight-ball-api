import Head from "next/head";
import Link from "next/link";
const exampleBiased = {
  reading: "It is decidedly so.",
  question: "Will I win the lottery",
  sentiment: {
    score: 4,
    comparative: 0.8,
    calculation: [
      {
        win: 4,
      },
    ],
    tokens: ["will", "i", "win", "the", "lottery"],
    words: ["win"],
    positive: ["win"],
    negative: [],
  },
};
const exampleRandom = {
  reading: "Reply hazy, try again.",
};

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen w-screen overflow-x-hidden flex   justify-center  lg:p-10 py-4 px-1">
      <Head>
        <title>8ball API</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="lg:max-w-5xl w-full flex-grow flex flex-col">
        <div className="flex flex-col items-center">
          <h1 className="text-gray-900 font-bold text-5xl">8Ball API</h1>
        </div>
        <h1 className="text-gray-900 text-xl">Random reading:</h1>
        <div className="w-full bg-gray-300 rounded-lg flex items-center">
          <a
            href="https://www.eightballapi.com/api/"
            className="text-gray-900 text-xl p-4"
          >
            <code>https://eightballapi.com/api/</code>
          </a>
        </div>
        <h1 className="text-gray-900 ">
          Send a GET request to this endpoint and it returns a random 8ball
          response message.
        </h1>
        <h1 className="text-gray-900 text-xl mt-4">Example response:</h1>
        <div className="w-full bg-gray-300 rounded-lg flex items-center">
          <p className="text-gray-900 text-xl p-4 ">
            <code>{JSON.stringify(exampleRandom)}</code>
          </p>
        </div>
        <h1 className="text-gray-900 text-xl mt-4">Biased reading:</h1>
        <div className="w-full bg-gray-300 rounded-lg  flex items-center ">
          <a
            href="https://www.eightballapi.com/api?biased=true&q=will+i+win+the+lottery"
            className="text-gray-900 text-xl p-4"
          >
            <code>https://eightballapi.com/api?biased=true&q=your_question_here</code>
          </a>
        </div>
        <h1 className="text-gray-900 ">
          Send a GET request to this endpoint with a question and it will return
          a biased response. If the question has positive sentiment, it will
          return a positive response. Negative sentiment, negative response. You
          must add <span className="italic">biased=true</span> and{" "}
          <span className="italic">q</span> parameters to your request.
        </h1>
        <h1 className="text-gray-900 text-xl mt-4">Example response:</h1>
        <div className="w-full bg-gray-300 rounded-lg flex items-center">
          <p className="text-gray-900 text-lg p-4 break-words">
            <code>{JSON.stringify(exampleBiased)}</code>
          </p>
        </div>{" "}
        <footer className=" mt-5 flex justify-between">
          <a
            href
            className="dark:text-gray-900 text-gray-900 transition-colors"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/j-sch23/magic-eight-ball-api"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <Link href="/demo">
            <a className=" font-bold  dark:text-gray-900 text-gray-900 transition-colors">
              Demo
            </a>
          </Link>
        </footer>
      </div>
    </div>
  );
}
