import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import { db, ref, get } from '../../services/firebase';

import { SHome } from './styles';
import { Button } from '../../components/Button';

export function Home() {
  const [roomCode, setRoomCode] = useState('');

  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) await signInWithGoogle();
    history.push('/rooms/new');
  }

  async function handleJoinRoom(e: FormEvent) {
    e.preventDefault();

    if (roomCode.trim() === '') return;

    const roomRef = await get(ref(db, `rooms/${roomCode}`));

    if (!roomRef.exists()) {
      alert('A sala não existe!');
      return;
    }

    if (roomRef.val().closedAt) {
      alert('A sala já foi encerrada');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <SHome>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração representando perguntas e respostas."
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask - Título da aplicação" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div id="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </SHome>
  );
}
