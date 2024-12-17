export default function Loading() {
  return (
    <div className="min-h-[50px] h-full flex justify-center items-center space-x-2">
      <div className="w-2 h-2 bg-gray-500 rounded-full opacity-0 animate-dot-bounce [animation-delay:0s]"></div>
      <div className="w-2 h-2 bg-gray-500 rounded-full opacity-0 animate-dot-bounce [animation-delay:0.2s]"></div>
      <div className="w-2 h-2 bg-gray-500 rounded-full opacity-0 animate-dot-bounce [animation-delay:0.4s]"></div>
    </div>
  );
}
