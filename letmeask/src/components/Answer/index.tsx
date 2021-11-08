import { FormEvent, useState } from 'react';

import { AnswerWrapper } from './styles';
import { UserInfo } from '../../pages/Room/styles';

import { Button } from '../Button';

import { db, ref, push, update } from '../../services/firebase';

import { useRoom } from '../../hooks/useRoom';
import { useModal } from '../../hooks/useModal';

type AnswerTextBoxProps = {
  roomId: string;
  questionId: string;
};

type AnswerProps = {
  answer: string;
  isAnswered: boolean;
  roomId: string;
};

export function Answer({ roomId, answer, isAnswered }: AnswerProps) {
  const { adminUser } = useRoom(roomId);

  return (
    <AnswerWrapper className={`${isAnswered && 'answered'}`}>
      <h4>Resposta</h4>
      <p>{answer}</p>
      <UserInfo color="#737380">
        <img
          src={adminUser?.avatar}
          alt={`Foto do adminstrador da sala: ${adminUser?.name}`}
        />
        <span>{adminUser?.name}</span>
      </UserInfo>
    </AnswerWrapper>
  );
}

export function AnswerTextBox({ roomId, questionId }: AnswerTextBoxProps) {
  const [answer, setAnswer] = useState('');

  const { modal, handleOpenWarningModal } = useModal();

  async function handleSendAnswer(e: FormEvent) {
    e.preventDefault();

    if (answer.trim() === '') {
      console.log('dasdsa');

      handleOpenWarningModal(
        'Aviso',
        'Digite sua resposta, antes de enviá-la!'
      );

      return;
    }

    const answerRef = ref(
      db,
      `rooms/${roomId}/questions/${questionId}/answers`
    );
    await push(answerRef, { content: answer });

    setAnswer('');

    await update(ref(db, `rooms/${roomId}/questions/${questionId}`), {
      isHighlighted: false,
    });
  }

  return (
    <AnswerWrapper style={{ marginTop: '24px' }}>
      {modal}
      <form onSubmit={handleSendAnswer}>
        <textarea
          placeholder="O que você quer responder?"
          className="answer-box"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <div>
          <Button type="submit">Enviar sua resposta</Button>
        </div>
      </form>
    </AnswerWrapper>
  );
}
