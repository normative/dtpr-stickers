import { feedbackEmojis } from 'common/constants';
import React from 'react';

interface EmojiProps {
  color: string;
}

function VerySadEmoji({
  color = '#E53319',
}: EmojiProps) {
  return (
    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4706 22.2687C18.6143 22.2687 23.5948 17.4474 23.5948 11.4999C23.5948 5.55245 18.6143 0.731079 12.4706 0.731079C6.3269 0.731079 1.34644 5.55245 1.34644 11.4999C1.34644 17.4474 6.3269 22.2687 12.4706 22.2687Z" stroke={color} strokeMiterlimit="10" />
      <path d="M7.87585 17.1184C8.78359 15.324 10.6926 14.2172 12.7125 14.3092C14.567 14.3936 16.2396 15.4762 17.0654 17.1184" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.56865 9.1589C9.56865 9.93463 8.91822 10.5635 8.11767 10.5635C7.31706 10.5635 6.66669 9.93458 6.66669 9.1589C6.66669 8.38392 7.31706 7.75427 8.11767 7.75427C8.91822 7.75427 9.56865 8.38392 9.56865 9.1589Z" fill={color} />
      <path d="M18.2745 9.1589C18.2745 9.93463 17.6241 10.5635 16.8235 10.5635C16.0229 10.5635 15.3726 9.93458 15.3726 9.1589C15.3726 8.38392 16.0229 7.75427 16.8235 7.75427C17.6241 7.75427 18.2745 8.38392 18.2745 9.1589Z" fill={color} />
    </svg>
  );
}

function SadEmoji({
  color = '#D6752A',
}: EmojiProps) {
  return (
    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4706 22.2687C18.6143 22.2687 23.5948 17.4474 23.5948 11.4999C23.5948 5.55245 18.6143 0.731079 12.4706 0.731079C6.3269 0.731079 1.34644 5.55245 1.34644 11.4999C1.34644 17.4474 6.3269 22.2687 12.4706 22.2687Z" stroke={color} strokeMiterlimit="10" />
      <path d="M16.6784 15.2082C13.6178 14.3954 11.1599 14.784 8.26276 16.0987" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.56865 9.1589C9.56865 9.93463 8.91822 10.5635 8.11767 10.5635C7.31706 10.5635 6.66669 9.93458 6.66669 9.1589C6.66669 8.38392 7.31706 7.75427 8.11767 7.75427C8.91822 7.75427 9.56865 8.38392 9.56865 9.1589Z" fill={color} />
      <path d="M18.2745 9.1589C18.2745 9.93463 17.6241 10.5635 16.8235 10.5635C16.0229 10.5635 15.3726 9.93458 15.3726 9.1589C15.3726 8.38392 16.0229 7.75427 16.8235 7.75427C17.6241 7.75427 18.2745 8.38392 18.2745 9.1589Z" fill={color} />
    </svg>
  );
}

function NeutralEmoji({
  color = '#BB9F5D',
}: EmojiProps) {
  return (
    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4706 22.2687C18.6143 22.2687 23.5948 17.4474 23.5948 11.4999C23.5948 5.55245 18.6143 0.731079 12.4706 0.731079C6.32687 0.731079 1.34641 5.55245 1.34641 11.4999C1.34641 17.4474 6.32687 22.2687 12.4706 22.2687Z" stroke={color} strokeMiterlimit="10" />
      <path d="M8.11765 14.7773H16.8235" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.56862 9.1589C9.56862 9.93463 8.91819 10.5635 8.11764 10.5635C7.31703 10.5635 6.66666 9.93459 6.66666 9.1589C6.66666 8.38392 7.31703 7.75427 8.11764 7.75427C8.91819 7.75427 9.56862 8.38392 9.56862 9.1589Z" fill={color} />
      <path d="M18.2745 9.1589C18.2745 9.93463 17.6241 10.5635 16.8235 10.5635C16.0229 10.5635 15.3726 9.93459 15.3726 9.1589C15.3726 8.38392 16.0229 7.75427 16.8235 7.75427C17.6241 7.75427 18.2745 8.38392 18.2745 9.1589Z" fill={color} />
    </svg>
  );
}

function HappyEmoji({
  color = '#74994D',
}: EmojiProps) {
  return (
    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4706 22.2687C18.6143 22.2687 23.5948 17.4474 23.5948 11.4999C23.5948 5.55245 18.6143 0.731079 12.4706 0.731079C6.32687 0.731079 1.34641 5.55245 1.34641 11.4999C1.34641 17.4474 6.32687 22.2687 12.4706 22.2687Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.2177 15.6807C15.8153 16.4467 14.1957 16.8839 12.4706 16.8839C10.7455 16.8839 9.12593 16.4468 7.72351 15.6807" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.56861 9.1589C9.56861 9.93463 8.91819 10.5635 8.11764 10.5635C7.31703 10.5635 6.66666 9.93458 6.66666 9.1589C6.66666 8.38392 7.31703 7.75427 8.11764 7.75427C8.91819 7.75427 9.56861 8.38392 9.56861 9.1589Z" fill={color} />
      <path d="M18.2745 9.1589C18.2745 9.93463 17.6241 10.5635 16.8235 10.5635C16.0229 10.5635 15.3726 9.93458 15.3726 9.1589C15.3726 8.38392 16.0229 7.75427 16.8235 7.75427C17.6241 7.75427 18.2745 8.38392 18.2745 9.1589Z" fill={color} />
    </svg>
  );
}

function VeryHappyEmoji({
  color = '#16A04D',
}: EmojiProps) {
  return (
    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4706 22.2687C18.6143 22.2687 23.5948 17.4474 23.5948 11.4999C23.5948 5.55245 18.6143 0.731079 12.4706 0.731079C6.3269 0.731079 1.34644 5.55245 1.34644 11.4999C1.34644 17.4474 6.3269 22.2687 12.4706 22.2687Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.87627 11.6038C9.67763 11.6038 10.3273 10.471 10.3273 9.07369C10.3273 7.67635 9.67763 6.54358 8.87627 6.54358C8.07492 6.54358 7.42529 7.67635 7.42529 9.07369C7.42529 10.471 8.07492 11.6038 8.87627 11.6038Z" fill={color} />
      <path d="M16.065 11.6054C16.8663 11.6054 17.516 10.4726 17.516 9.07528C17.516 7.67794 16.8663 6.54517 16.065 6.54517C15.2636 6.54517 14.614 7.67794 14.614 9.07528C14.614 10.4726 15.2636 11.6054 16.065 11.6054Z" fill={color} />
      <path d="M19.5296 14.1406C19.5354 14.8615 19.3924 15.5763 19.1088 16.2429C13.0679 17.6616 6.80936 16.4021 5.81302 16.182C5.54276 15.5335 5.40638 14.8399 5.41158 14.1406H5.46478C5.46478 14.1406 12.623 15.8215 19.4377 14.1734L19.5296 14.1406Z" stroke={color} fill="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.1089 16.2429C18.2432 18.2421 16.0377 19.628 12.4876 19.628C8.9037 19.628 6.66919 18.2094 5.81311 16.182C6.80945 16.4021 13.068 17.6616 19.1089 16.2429Z" stroke={color} fill={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const EMOJIS = {
  [feedbackEmojis.VERY_HAPPY]: VeryHappyEmoji,
  [feedbackEmojis.HAPPY]: HappyEmoji,
  [feedbackEmojis.NEUTRAL]: NeutralEmoji,
  [feedbackEmojis.SAD]: SadEmoji,
  [feedbackEmojis.VERY_SAD]: VerySadEmoji,
};

interface Props {
  emoji: feedbackEmojis.VERY_HAPPY |
    feedbackEmojis.HAPPY |
    feedbackEmojis.NEUTRAL |
    feedbackEmojis.SAD |
    feedbackEmojis.VERY_SAD;
  color?: string;
}

function FeedbackEmoji({ emoji, color }: Props) {
  const Emoji = EMOJIS[emoji];
  return <Emoji color={color} />;
}

FeedbackEmoji.defaultProps = {
  color: undefined,
};

export default FeedbackEmoji;
