import { RoomCodeBtn } from './styles';
import copyImg from '../../assets/images/copy.svg';

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
    alert('Código da sala copiado!');
  }

  return (
    <RoomCodeBtn onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copiar código da sala" />
      </div>
      <span>Sala -MmxtO57mMLvErbVZ7yW</span>
    </RoomCodeBtn>
  );
}
