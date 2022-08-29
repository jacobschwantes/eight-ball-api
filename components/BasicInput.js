export default function BasicInput(props) {
  return (
    <div className="bg-white border border-gray-300 rounded-md px-3 py-1 shadow-sm focus-within:ring-1 focus-within:ring-lime-600 focus-within:border-lime-600 flex-grow ">
      <label htmlFor="name" className="block text-xs font-medium text-gray-900">
        {props.label}
      </label>
      <input
        required={props.required}
        onChange={(e) => props.update(e.target.value)}
        type="text"
        name="name"
        id="name"
        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm bg-white"
        placeholder={props.placeholder}
      />
    </div>
  );
}
