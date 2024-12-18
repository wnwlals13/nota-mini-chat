import MessageList from './message-list';
import InputField from './Input-field';
import MessageHeader from './message-header';

export default function MessageSection() {
  return (
    <div className="flex-1 w-full flex flex-col relative m-2 bg-white rounded-md overflow-hidden">
      <MessageHeader />
      <MessageList />
      <InputField />
    </div>
  );
}
