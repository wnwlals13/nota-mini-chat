import { useEffect, useState } from 'react';

export function useSelected<T>(disabled: boolean, item?: T, displayName?: keyof T) {
  const [selected, setSelected] = useState<string>(''); /* Dropdown 선택된 옵션 */

  useEffect(() => {
    /* Dropdown 초기화 */
    if (!disabled && item) {
      displayName ? setSelected(String(item[displayName])) : null;
    }
  }, [disabled, item]);

  return {
    selected,
    setSelected,
  };
}
