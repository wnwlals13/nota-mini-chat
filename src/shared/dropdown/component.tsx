import { useState } from 'react';
import { IDropdownProps } from './type';
import DropdownHead from './head';
import DropdownBody from './body';
import { useSelected } from './hook';

export default function Dropdown<T>(props: IDropdownProps<T>) {
  const { disabled, currentOption, items, displayName } = props;
  const [active, setActive] = useState<boolean>(false); /* Dropdown 리스트 열림 여부 */
  const { selected, setSelected } = useSelected(
    !disabled,
    currentOption ? currentOption : items ? items[0] : undefined,
    displayName,
  );

  /* Dropdown 박스 열림 이벤트 */
  const handleOpen = () => {
    setActive((prev) => !prev);
  };

  /* Dropdown 아이템 선택 이벤트 */
  const handleChange = (item: T) => {
    setSelected(String(item[displayName]));
    setActive((prev) => !prev);
  };

  return (
    <div className="relative w-[200px]">
      <DropdownHead onClick={handleOpen} selected={selected} {...props} />
      {active && <DropdownBody onClickWithProps={handleChange} {...props} />}
    </div>
  );
}
