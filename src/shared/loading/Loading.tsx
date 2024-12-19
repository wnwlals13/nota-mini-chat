export default function Loading() {
  return (
    <div className="flex max-h-[50px] w-full justify-center space-x-2">
      <div className="flex h-[50px] w-[50px] items-center justify-center gap-1 rounded-full bg-white">
        <div className="h-2 w-2 animate-dot-bounce rounded-full bg-primary opacity-0 [animation-delay:0s]"></div>
        <div className="h-2 w-2 animate-dot-bounce rounded-full bg-primary opacity-0 [animation-delay:0.2s]"></div>
        <div className="h-2 w-2 animate-dot-bounce rounded-full bg-primary opacity-0 [animation-delay:0.4s]"></div>
      </div>
    </div>
  );
}
