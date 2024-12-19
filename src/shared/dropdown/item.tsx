import { IDropdownItemProps } from './type';

export default function DropDownItem<T>({ item, displayName, onClick }: IDropdownItemProps<T>) {
  return (
    <li className="cursor-pointer rounded-md p-1 hover:bg-gray1" onClick={() => onClick(item)}>
      <p>{String(item[displayName])}</p>
    </li>
  );
}
