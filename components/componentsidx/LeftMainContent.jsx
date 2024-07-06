import { useState } from 'react';
import IdxAsideL from './IdxAsideL';// Ajusta la ruta según tu estructura de archivos
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
    <div className="flex justify-center md:-mr-20">
      <IdxAsideL reactionCounts={reactionCounts} handleEmojiClick={handleEmojiClick} />
      <CenterPost reactionCounts={reactionCounts} />
    </div>
  );
}