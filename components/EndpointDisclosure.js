import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import JSONPretty from "react-json-pretty";
import ParamsTable from "./ParamsTable";

const theme = {
  main: "line-height:1.3;color:#D1D5DB;overflow:auto;",
  error: "line-height:1.3;color:#66d9ef;overflow:auto;",
  key: "color:#60A5FA;",
  string: "color:#E5E7EB;",
  value: "color:#a6e22e;",
  boolean: "color:#ac81fe;",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function EndpointDisclosure(props) {
  return (
    <dl className="mt-4">
        <Disclosure
          as="div"
          className={
            " p-2 border rounded-md " +
            (props.type === "GET"
              ? "bg-blue-50 border-blue-400" : props.type === "DELETE" ? "bg-red-50 border-red-400" :
               "bg-green-50 border-green-400")
          }
        >
          {({ open }) => (
            <>
              <dt className="text-lg">
                <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                  <span className="flex sm:flex-row flex-col  sm:items-center">
                    <span>
                      <span
                        className={
                          "text-gray-50 font-medium text-base px-5 py-1 rounded-md " +
                          (props.type === "GET"
                            ? "bg-blue-500"
                            : props.type === "DELETE"
                            ? "bg-red-500"
                            : "bg-green-500")
                        }
                      >
                        {props.type}
                      </span>
                      <code className="font-medium text-gray-900 mx-2">
                        {props.path}
                      </code>
                    </span>

                    <span className="text-sm  text-gray-800">
                      {props.shortDescription}
                    </span>
                  </span>
                  <span className="ml-6 h-7 flex items-center">
                    <ChevronDownIcon
                      className={classNames(
                        open ? "-rotate-180" : "rotate-0",
                        "h-6 w-6 transform"
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 ">
                <p className=" text-gray-800 pt-2">{props.body}</p>

                <ParamsTable data={props.params} />
                <h1 className="text-gray-800 font-medium">Example request</h1>
                <div className="bg-gray-800 rounded-md p-4 my-1">
                  <JSONPretty theme={theme} data={props.exampleRequest} />
                </div>
                <h1 className="text-gray-800 font-medium">Example response</h1>
                <div className="bg-gray-800 rounded-md p-4 my-1">
                  <JSONPretty theme={theme} data={props.exampleResponse} />
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      
    </dl>
  );
}
