export interface IDropdownItem {
  id: string;
  name: string;
}

export interface IDropdownProps<T> {
  items: T[] /* Dropdown 옵션 아이템 */;
  displayName: keyof T /* Dropdown 아이템 객체(T) 중 보여주려는 Key 값 */;
  placeholder?: string /* Dropdown 초기값 설정 전 노출 문구 */;
  initialOption?: string;
  disabled: boolean;
  onChange?: (item: T) => void;
}
