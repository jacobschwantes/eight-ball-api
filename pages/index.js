import Head from "next/head";
import { useState, useEffect } from "react";
import BasicInput from "../components/BasicInput";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Toggle from "../components/Toggle";
export default function Home() {
  const [question, setQuestion] = useState("");
  const [lucky, setLucky] = useState(false);
  const [biased, setBiased] = useState(false);
  const [query, setQuery] = useState(`https://eightballapi.com/api/`);
  useEffect(() => {
    assembleQuery();
  }, [question, lucky, biased]);

  const assembleQuery = () => {
    let formatQuestion = question.replace(/ /g, "+");
    let newQuery = `https://eightballapi.com/api${
      biased ? "/biased" : ""
    }?question=${formatQuestion}`;
    newQuery += `&lucky=${lucky}`;
    setQuery(newQuery);
  };

  const fetchResponse = () => window.open(query);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation active="Home" />
      <Head>
        <title>8Ball API</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <CTA />
      <div
        id="demo"
        className="max-w-lg mx-auto flex flex-col items-center  py-16 sm:py-24 lg:py-32  "
      >
        <h2 className="text-base text-lime-600 font-semibold tracking-wide uppercase">
          LIVE DEMO
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-6">
          Build your API query
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchResponse();
          }}
          className="max-w-6xl w-full bg-gray-100 p-5 border rounded-lg transition-transform space-y-5"
        >
          <BasicInput
            required
            label="Question"
            value={question}
            placeholder="Will I win the lottery"
            update={setQuestion}
          />
          <Toggle
            enabled={biased}
            setEnabled={setBiased}
            head="Biased"
            description="Reading will use basic sentiment analysis to create a biased reading based on the question asked."
          />
          <Toggle
            enabled={lucky}
            setEnabled={setLucky}
            head="Lucky"
            description="Reading will try to give favorable response based on the sentiment of question asked."
          />
          <div>
            <label
              htmlFor="query"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 "
            >
              Your API query
            </label>
            <div className="mt-1 ">
              <textarea
                value={query}
                readOnly
                id="query"
                name="query"
                rows={3}
                className=" shadow-sm block w-full focus:ring-lime-500 focus:border-lime-500 sm:text-sm border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="justify-between flex mt-4 space-x-2">
            <button
              onClick={() => {
                navigator.clipboard.writeText(query);
              }}
              type="button"
              className="inline-flex items-center px-2.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
            >
              Copy URL to Clipboard
            </button>
            <button
              type="submit"
              className=" inline-flex items-center px-2.5 py-2 border border-transparent text-sm font-medium tracking-wide rounded-md shadow-sm text-white bg-lime-600 hover:bg-lime-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
            >
              Get Reading
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
