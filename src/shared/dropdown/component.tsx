import { useEffect, useState } from 'react';

export default function Dropdown({ items, targetName }: { items: any[]; targetName: string }) {
  const [active, setActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');

  const handleOpen = () => {
    setActive((prev) => !prev);
  };

  const handleUpdateSelected = (item: string) => {
    setSelected(item);
    setActive((prev) => !prev);
  };

  useEffect(() => {
    if (items.length) {
      setSelected(items[0][targetName]);
    }
  }, [items]);

  return (
    <div className="relative w-[200px]">
      <button
        className="w-full h-[35px] flex justify-between items-center border rounded-md pl-2 pr-2 "
        onClick={handleOpen}
      >
        {selected}
        <svg
          className="ml-2 h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <ul
        className={`overflow-hidden max-h-0 absolute w-full bg-white rounded-md shadow-md backdrop-blur-md ${
          active ? 'max-h-[200px] mt-2 p-2 overflow-y-hidden' : ''
        }`}
      >
        {items.length > 0 &&
          items?.map((item, idx) => (
            <li
              key={idx}
              className="p-1 hover:bg-gray1 rounded-md"
              onClick={() => handleUpdateSelected(item[targetName])}
            >
              <a className="cursor-pointer">{item[targetName]}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}
