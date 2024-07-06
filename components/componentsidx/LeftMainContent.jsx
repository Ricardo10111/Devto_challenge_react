import { useState } from 'react';
import IdxAsideL from './IdxAsideL';
import CenterPost from './IdxCenter';

const initialReactions = [
  { emoji: '❤️', count: 8 },
  { emoji: '🦄', count: 2 },
  { emoji: '😲', count: 0 },
  { emoji: '🙌', count: 0 },
  { emoji: '🔥', count: 0 }
];

export default function LeftMainContent() {
  const [reactionCounts, setReactionCounts] = useState(initialReactions);

  const handleEmojiClick = (index) => {
    const newReactions = [...reactionCounts];
    newReactions[index].count += 1;
    setReactionCounts(newReactions);
  };

  return (
    <div className="flex justify-end md:justify-center w-full">
      <IdxAsideL reactionCounts={reactionCounts} handleEmojiClick={handleEmojiClick} />
      <CenterPost reactionCounts={reactionCounts} />
    </div>
  );
}