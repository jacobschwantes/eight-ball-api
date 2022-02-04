export default function ParamsTable(props) {
  return (
    <div className="w-full my-4  rounded-lg">
      <div className="w-full ">
        <table className="w-full">
          <thead>
            <tr className="text-xs  text-left text-blue-900   border-b border-blue-300">
              <th className="py-2 px-1">Query Parameter</th>
              <th className="px-1 py-2">Type</th>
              <th className="px-1 py-2">Required</th>
            </tr>
          </thead>

          {props.data.map((data) => {
            return (
              <tbody className="">
                <td className=" py-2 px-1  ">
                  <code className="text-sm font-bold">{data.param}</code>
                  <p className="text-xs">{data.description}</p>
                </td>
                <td className="py-2 px-1 text-sm ">{data.type}</td>
                <td className={"py-2 px-1 text-sm " + (data.required === 'optional' ? "italic" : null)}>{data.required}</td>{" "}
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
