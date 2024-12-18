import { useCallback, useEffect, useRef, useState } from 'react';
import Button from '../../shared/buttons/component';
import MessageItem from './message-item';
import { FiArrowDown } from 'react-icons/fi';
import { useMessageList } from '../../services/messages/useMessageList';
import { Dialogue } from '../../type';
import { useChatStore } from '../../stores/chat/chatStore';
import Loading from '../../shared/loading/Loading';

export default function MessageList() {
  const { data: items } = useMessageList(); /* 대화 목록 */
  const [showBtn, setShowBtn] = useState(false); /* 스크롤 버튼 노출 여부 */
  const lastMessageRef = useRef<HTMLDivElement | null>(null); /* 마지막 메세지 Ref */
  const listRef = useRef<HTMLDivElement | null>(null); /* 대화 내역 Ref */
  const { isComplete } = useChatStore();

  /* Function : 맨 하단으로 이동 */
  const handleScrollToBottom = useCallback(() => {
    if (lastMessageRef.current) lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

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
        threshold: 0.1,
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
      {items?.map((item: Dialogue, idx: number) => (
        <div className="flex flex-col gap-5" key={idx}>
          <MessageItem text={item.prompt} isUser={true} />
          <MessageItem text={item.completion} isUser={false} />
        </div>
      ))}
      {!isComplete && <Loading />}
      <div ref={lastMessageRef} className="flex h-[30px] min-h-[20px]"></div>
      {showBtn && (
        <Button
          className="flex justify-center items-center absolute w-[35px] h-[35px] bottom-0 left-1/2 -translate-x-1/2 mb-[110px] z-10 rounded-full bg-gray-500 shadow-lg"
          onClick={handleScrollToBottom}
        >
          <FiArrowDown />
        </Button>
      )}
    </div>
  );
}
