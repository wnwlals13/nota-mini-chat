import React from 'react';

const MessageItem = React.memo(function MessageItem({ text }: { text: string }) {
  return (
    <div className="flex-1 flex justify-end gap-2">
      <div className="bg-white pl-2 pr-2 rounded-lg flex items-center">{text}</div>
      <div className="w-7 h-7 bg-white rounded-full"></div>
    </div>
  );
});

export default MessageItem;
