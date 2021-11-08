import { useHistory, useParams } from 'react-router';

import logoImg from '../../assets/images/logo.svg';

import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';
import deleteImg from '../../assets/images/delete.svg';

import { PageRoom } from '../Room/styles';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';
import { EmptyQuestions } from '../../components/EmptyQuestions';
import { AnswerTextBox } from '../../components/Answer';

import { db, ref, get, update, remove } from '../../services/firebase';

import { useRoom } from '../../hooks/useRoom';
import { useModal } from '../../hooks/useModal';

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { title, questions } = useRoom(roomId);
  const { modal, handleOpenModal, handleOpenWarningModal } = useModal();

  async function handleEndRoom() {
    await update(ref(db, `rooms/${roomId}`), {
      closedAt: new Date(),
    });

    history.push('/');
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    const data = await get(ref(db, `rooms/${roomId}/questions/${questionId}`));

    if (data.val().isHighlighted) {
      handleOpenWarningModal(
        'Aviso',
        'Você deve responder a pergunta antes de marcá-la como respondida!'
      );
      return;
    }

    const questionRef = ref(db, `rooms/${roomId}/questions/${questionId}`);
    await update(questionRef, {
      isAnswered: true,
    });
  }

  async function handleHighlightedQuestion(questionId: string) {
    const questionRef = ref(db, `rooms/${roomId}/questions/${questionId}`);

    const data = await get(questionRef);

    if (data.val().isHighlighted) {
      await update(questionRef, {
        isHighlighted: false,
      });
    } else {
      await update(questionRef, {
        isHighlighted: true,
      });
    }
  }

  async function handleRemoveQuestion(questionId: string) {
    if (window.confirm('Você tem certeza que deseja remover a pergunta?')) {
      const questionRef = ref(db, `rooms/${roomId}/questions/${questionId}`);
      await remove(questionRef);
    }
  }

  return (
    <PageRoom>
      {modal}
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={() => handleOpenModal(handleEndRoom)}>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>{title}</h1>
          <span>{questions?.length} pergunta(s)</span>
        </div>
        {questions?.length === 0 ? (
          <EmptyQuestions />
        ) : (
          <div className="question-list">
            {questions?.map((question) => (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
                answerTextBox={
                  <AnswerTextBox roomId={roomId} questionId={question.id} />
                }
                answers={question.answers}
                roomId={roomId}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img
                        src={checkImg}
                        alt="Marcar pergunta como respondida"
                      />
                    </button>

                    <button
                      onClick={() => handleHighlightedQuestion(question.id)}
                    >
                      <img src={answerImg} alt="Dar destaque à pergunta" />
                    </button>
                  </>
                )}
                <button onClick={() => handleRemoveQuestion(question.id)}>
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            ))}
          </div>
        )}
      </main>
    </PageRoom>
  );
}
