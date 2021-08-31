import Head from "next/head";
import { useState } from "react";
export default function Demo() {
  const [res, setRes] = useState("");
  const [question, setQuestion] = useState("");
  const getResponse = async (question) => {
    await fetch(`api/biased?q=${question}`)
      .then((response) => response.json())
      .then((data) => {
        setRes(data.response.reading);
      })
      .catch((err) => alert(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getResponse(question);
  };
  const handleChange = (e) => {
    setQuestion(e.target.value);
  };
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-white  text-5xl mb-5">Magic 8-ball</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              value={question}
              required
              type="text"
              name="email"
              id="email"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Will I get promoted?"
            />
          </div>
          <button
            type="submit"
            className=" ml-2 mb-5 bg-indigo-600 p-2 rounded-md text-white font-bold hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
      <div className=" text-white text-xl italic">{res}</div>
    </div>
  );
}