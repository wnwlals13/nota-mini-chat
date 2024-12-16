import { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export interface IDropdownProps<T> {
  items: T[];
  targetName: keyof T;
  targetTitle?: string;
  initialOption?: string;
  disabled: boolean;
  onChange?: (item: T) => void;
}

export default function Dropdown<T>({
  items,
  targetTitle,
  targetName,
  initialOption,
  disabled,
  onChange,
}: IDropdownProps<T>) {
  const [active, setActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false); // Dropdown 아이템 로딩 여부

  const handleOpen = () => {
    setActive((prev) => !prev);
  };

  /* 아이템 선택 함수 */
  const handleUpdateSelected = (item: T) => {
    setSelected(String(item[targetName]));
    setActive((prev) => !prev);
    onChange && onChange(item);
  };

  useEffect(() => {
    if (initialOption) setSelected(initialOption);
    else setSelected('');
  }, [initialOption]);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    console.log('items=>', items);
    if (items) setLoading(false);
  }, [items]);

  useEffect(() => {
    console.log('disabled', disabled);
  }, [disabled]);

  return (
    <div className="relative w-[200px]">
      <button
        className="w-full h-[35px] flex justify-between items-center border rounded-md pl-2 pr-2 "
        onClick={handleOpen}
        disabled={!disabled}
      >
        <p>{selected ? selected : targetTitle}</p>
        <FiChevronDown />
      </button>

      <ul
        className={`overflow-hidden max-h-0 absolute w-full bg-white rounded-md shadow-md backdrop-blur-md ${
          active ? 'max-h-[110px] mt-2 p-2 overflow-y-hidden' : ''
        }`}
      >
        {items.length > 0 ? (
          items?.map((item, idx) => (
            <li
              key={idx}
              className="p-1 hover:bg-gray1 rounded-md"
              onClick={() => handleUpdateSelected(item)}
            >
              <a className="cursor-pointer">{String(item[targetName])}</a>
            </li>
          ))
        ) : (
          <div className="h-[110px]">loading...</div>
        )}
      </ul>
    </div>
  );
}
