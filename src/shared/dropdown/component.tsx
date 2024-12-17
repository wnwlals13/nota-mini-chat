import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { IDropdownItemProps, IDropdownProps } from './type';
import Loading from '../loading/Loading';

function DropDownItem<T>({ item, displayName, onClick }: IDropdownItemProps<T>) {
  return (
    <li className="p-1 hover:bg-gray1 rounded-md" onClick={() => onClick(item)}>
      <a className="cursor-pointer">{String(item[displayName])}</a>
    </li>
  );
}

export default function Dropdown<T>({
  items,
  displayName,
  placeholder,
  disabled,
  onChange,
}: IDropdownProps<T>) {
  const [active, setActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');

  const handleOpen = () => {
    setActive((prev) => !prev);
  };

  /* 아이템 선택 함수 */
  const handleUpdateSelected = (item: T) => {
    setSelected(String(item[displayName]));
    setActive((prev) => !prev);
    onChange && onChange(item);
  };

  useEffect(() => {
    if (items) setSelected(String(items[0][displayName]));
  }, [items]);

  /* Button 스타일 */
  const buttonStyles = clsx(
    'w-full h-[35px] flex justify-between items-center border rounded-md pl-2 pr-2',
    {
      'bg-gray1': !disabled,
    },
  );

  /* DropBox 스타일 */
  const dropboxStyles = clsx(
    'absolute w-full max-h-0 bg-white rounded-md shadow-md backdrop-blur-md overflow-hidden',
    {
      'max-h-[110px] mt-2 p-2 overflow-y-hidden': active,
    },
  );

  return (
    <div className="relative w-[200px]">
      <button className={buttonStyles} onClick={handleOpen} disabled={!disabled}>
        {selected ? <p>{selected}</p> : <p className="text-gray-500">{placeholder}</p>}
        <FiChevronDown />
      </button>

      <ul className={dropboxStyles}>
        {items?.length > 0 ? (
          items?.map((item, idx) => (
            <DropDownItem
              key={idx}
              item={item}
              onClick={handleUpdateSelected}
              displayName={displayName}
            />
          ))
        ) : (
          <div className="h-[110px]">
            <Loading />
          </div>
        )}
      </ul>
    </div>
  );
}
