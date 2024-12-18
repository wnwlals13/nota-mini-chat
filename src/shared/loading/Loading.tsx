export default function Loading() {
  return (
    <div className="w-full max-h-[50px] flex justify-center space-x-2">
      <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center gap-1">
        <div className="w-2 h-2 bg-primary rounded-full opacity-0 animate-dot-bounce [animation-delay:0s]"></div>
        <div className="w-2 h-2 bg-primary rounded-full opacity-0 animate-dot-bounce [animation-delay:0.2s]"></div>
        <div className="w-2 h-2 bg-primary rounded-full opacity-0 animate-dot-bounce [animation-delay:0.4s]"></div>
      </div>
    </div>
  );
}
