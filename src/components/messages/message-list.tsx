import { Dialogue } from '../../type';
import MessageItem from './message-item';

export default function MessageList({ items }: { items: Dialogue[] }) {
  return (
    <div className="flex-1 m-2 p-2 bg-gray1 flex flex-col gap-2">
      {items?.length > 0 &&
        items?.map((item, idx) => (
          <div className="flex flex-col">
            <MessageItem key={idx} text={item.prompt} />
            <div className="flex-1 flex justify-start gap-2">
              <div className="w-7 h-7 bg-white rounded-full"></div>
              <div className="flex items-center" key={idx}>
                {item.completion}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
