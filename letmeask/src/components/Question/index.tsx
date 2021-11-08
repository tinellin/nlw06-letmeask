import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { SQuestion, ConnectionWrapper } from './styles';
import { UserInfo } from '../../pages/Room/styles';

import cx from 'classnames';
import { Answer } from '../Answer';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
  answerTextBox?: ReactNode | '';
  answers: { key: string; content: string }[];
  roomId: string;
};

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
  answerTextBox,
  answers,
  roomId,
}: QuestionProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: 60 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 60 }}
      >
        <SQuestion
          className={cx({
            answered: isAnswered,
            highlighted: isHighlighted && !isAnswered,
          })}
        >
          <p>{content}</p>
          <footer>
            <UserInfo color="#737380">
              <img src={author.avatar} alt={author.name} />
              <span>{author.name}</span>
            </UserInfo>
            <div>{children}</div>
          </footer>
        </SQuestion>
      </motion.div>
      {answers.map((answer) => {
        return (
          <ConnectionWrapper key={answer.key}>
            <div className="connection" />
            <div>
              <Answer
                answer={answer.content}
                isAnswered={isAnswered}
                roomId={roomId}
              />
            </div>
          </ConnectionWrapper>
        );
      })}
      {isHighlighted && answerTextBox}
    </>
  );
}
