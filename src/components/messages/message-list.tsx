import { Dialogue } from '../../type';

export default function MessageList({ items }: { items: Dialogue[] }) {
  return (
    <div className="flex-1 m-2 p-2 bg-gray1 flex flex-col gap-2">
      {items?.length > 0 && items?.map((item, idx) => <div key={idx}>{item.completion}</div>)}
    </div>
  );
}
