import clsx from 'clsx';
import { IDropdownSectionProps } from './type';
import { FiChevronDown } from 'react-icons/fi';

export default function DropdownHead<T>({
  disabled,
  placeholder,
  onClick,
  selected,
}: IDropdownSectionProps<T>) {
  /* Button 스타일 */
  const buttonStyles = clsx(
    'w-full h-[35px] flex justify-between items-center border rounded-md pl-2 pr-2',
    {
      'bg-gray1': disabled,
    },
  );

  return (
    <button className={buttonStyles} onClick={onClick} disabled={disabled}>
      {selected ? <p>{selected}</p> : <p className="text-gray-500">{placeholder}</p>}
      <FiChevronDown />
    </button>
  );
}
