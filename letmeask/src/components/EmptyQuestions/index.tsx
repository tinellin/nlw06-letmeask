import { EmptyQuestionsWrapper } from './styles';

import emptyQuestionsImg from '../../assets/images/empty-questions.svg';

export function EmptyQuestions() {
  return (
    <EmptyQuestionsWrapper>
      <img
        src={emptyQuestionsImg}
        alt="Imagem que representa que não há nenhuma pergunta na sala"
      />
      <span>Nenhuma pergunta por aqui...</span>
      <p>
        Envie o código desta sala para seus amigos e comece a responder
        perguntas!
      </p>
    </EmptyQuestionsWrapper>
  );
}
