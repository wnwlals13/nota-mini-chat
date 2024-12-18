import { IDropdownItemProps } from './type';

export default function DropDownItem<T>({ item, displayName, onClick }: IDropdownItemProps<T>) {
  return (
    <li className="p-1 hover:bg-gray1 rounded-md cursor-pointer" onClick={() => onClick(item)}>
      <p>{String(item[displayName])}</p>
    </li>
  );
}
