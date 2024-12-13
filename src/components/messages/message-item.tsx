export default function MessageItem({ text }: { text: string }) {
  return (
    <div>
      <div className="bg-white inline-block p-1 pl-2 pr-2 rounded-lg text-sm">{text}</div>
    </div>
  );
}
