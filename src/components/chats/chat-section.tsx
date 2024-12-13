import Button from '../../shared/buttons/component';
import ChatList from './chat-list';

export default function ChatSection() {
  return (
    <div className="min-w-[250px] m-2 p-2 flex flex-col items-end bg-white rounded-md">
      <div className="mb-2">
        <Button color="secondary">New</Button>
      </div>
      <ChatList />
    </div>
  );
}
