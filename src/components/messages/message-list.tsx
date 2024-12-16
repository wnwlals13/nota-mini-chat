import { useEffect, useRef, useState } from 'react';
import Button from '../../shared/buttons/component';
import { Dialogue } from '../../type';
import MessageItem from './message-item';
import { FiArrowDown } from 'react-icons/fi';

export default function MessageList({ items }: { items: Dialogue[] }) {
  const [showBtn, setShowBtn] = useState(false); /* 스크롤 버튼 노출 여부 */
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  /* Function : 맨 하단으로 이동 */
  const handleScrollToBottom = () => {
    if (lastMessageRef.current) lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBtn(false);
        } else {
          setShowBtn(true);
        }
      },
      {
        rootMargin: '0px',
        threshold: 1.0,
      },
    );

    if (lastMessageRef.current) {
      observer.observe(lastMessageRef.current);
    }

    return () => {
      if (lastMessageRef.current) {
        observer.unobserve(lastMessageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // 메세지 추가 시, 최신 메세지 노출
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [items]);

  return (
    <div
      ref={listRef}
      className="h-full m-2 p-2 mb-[100px] bg-gray1 flex flex-col gap-2 overflow-y-scroll"
    >
      {items?.length > 0 &&
        items?.map((item, idx) => (
          <div className="flex flex-col" key={idx}>
            <MessageItem text={item.prompt} />
            <div className="flex-1 flex justify-start gap-2">
              <div className="w-7 h-7 bg-white rounded-full"></div>
              <div className="flex items-center">{item.completion}</div>
            </div>
          </div>
        ))}
      <div ref={lastMessageRef} className="flex h-[30px] min-h-[20px]"></div>
      <Button
        className={`${
          showBtn ? 'flex' : 'hidden'
        } justify-center items-center absolute w-[35px] h-[35px] bottom-0 left-1/2 -translate-x-1/2 mb-[110px] z-10 rounded-full bg-gray-500 shadow-lg`}
        onClick={handleScrollToBottom}
      >
        <FiArrowDown />
      </Button>
    </div>
  );
}
