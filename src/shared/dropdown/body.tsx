import clsx from 'clsx';
import { IDropdownSectionProps } from './type';
import Loading from '../loading/Loading';
import DropDownItem from './item';

export default function DropdownBody<T>({
  items,
  displayName,
  onClickWithProps,
  onChange,
}: IDropdownSectionProps<T>) {
  /* 아이템 선택 함수 */
  const handleUpdateSelected = (item: T) => {
    onClickWithProps && onClickWithProps(item);
    onChange && onChange(item);
  };

  /* DropBox 스타일 */
  const dropboxStyles = clsx(
    'absolute w-full bg-white rounded-md shadow-md backdrop-blur-md overflow-hidden max-h-[110px] mt-2 p-2 overflow-y-hidden',
  );

  return (
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
  );
}
