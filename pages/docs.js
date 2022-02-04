import EndpointDisclosure from "../components/EndpointDisclosure";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
const endpoints = [
  {
    path: "/",
    type: "GET",
    params: [
      
      // More params...
    ],
    example_request: "https://eightballapi.vercel.app/api",
    example_response: { reading: "Reply hazy, try again.", },
    short_description: "responds with a random reading",
    body: "Returns a random fortune reading.",
  },
  {
    path: "/biased",
    type: "GET",
    params: [
      {
        param: "question",
        type: "string",
        required: "required",
        description: "Question to be analysed",
      },
      {
        param: "lucky",
        type: "boolean",
        required: "optional",
        description: "If set to true response will likely be a prefered response. If false, unprefered. Defaults to true.",
      },
      
      // More params...
    ],
    example_request: "https://eightballapi.vercel.app/api/biased?q=will+i+win+the+lottery",
    example_response: {
      reading: "It is decidedly so.",
      question: "will i win the lottery",
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
    },
    short_description: "responds with a biased reading",
    body: "Returns a biased response. If the question has positive sentiment, it will return a positive response. Negative sentiment, negative response.",
  },

  // More endpoints...
];

export default function Docs() {
  return (
    <div className="flex flex-col  min-h-screen  bg-gray-50">
      <Head>
        <title>8Ball API | Docs</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className="bg-gray-50">
        <Navigation active="Docs" />
        <div className="max-w-7xl mx-auto py-10 px-4 sm:py-6 sm:px-6 lg:px-8 min-h-screen">
          <div className="max-w-7xl mx-auto">
            <div className=" flex flex-col space-y-3  items-start mb-5 border-b border-gray-300">
              <h2 className=" text-3xl text-gray-900 sm:text-4xl">
                8Ball API
              </h2>

              <span className="bg-gray-600 text-gray-100 font-bold px-2 py-1 rounded text-center">
                1.0.0
              </span>

              <code className="text-sm">Base URL: eightballapi.vercel.app/api</code>
              <p>An API for getting random or biased fortune readings.</p>
              <a
                href="mailto:developer@jasch.dev"
                target="_blank"
                rel="noopener"
                className=" text-indigo-600 pb-2"
              >
                Contact developer
              </a>
            </div>
            <h2 className=" text-2xl  text-gray-900 ">Endpoints</h2>
            {endpoints.map((endpoint) => {
              return (
                <EndpointDisclosure
                  type={endpoint.type}
                  path={endpoint.path}
                  shortDescription={endpoint.short_description}
                  body={endpoint.body}
                  exampleResponse={endpoint.example_response}
                  exampleRequest={endpoint.example_request}
                  params={endpoint.params}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
