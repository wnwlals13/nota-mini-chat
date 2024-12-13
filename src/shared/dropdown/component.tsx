export default function Dropdown({ items, targetName }: { items: any[]; targetName: string }) {
  console.log('items', items[0]);
  return (
    <select>{items.length > 0 && items?.map((item) => <option>{item[targetName]}</option>)}</select>
  );
}
