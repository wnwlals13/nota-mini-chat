import MessageList from './message-list';
import InputField from './Input-field';
import MessageHeader from './message-header';

export default function MessageSection() {
  return (
    <div className="relative m-2 flex w-full flex-1 flex-col overflow-hidden rounded-md bg-white">
      <MessageHeader />
      <MessageList />
      <InputField />
    </div>
  );
}
