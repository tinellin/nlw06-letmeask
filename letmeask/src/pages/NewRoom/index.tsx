import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import { SHome } from '../Home/styles';
import { Button } from '../../components/Button';

import { db, ref, push } from '../../services/firebase';

export function NewRoom() {
  const [newRoom, setNewRoom] = useState('');
  const history = useHistory();

  const { user } = useAuth();

  async function handleCreateRoom(e: FormEvent) {
    e.preventDefault();

    if (newRoom.trim() === '') return;

    const roomRef = ref(db, 'rooms');

    const fbRoom = await push(roomRef, {
      title: newRoom,
      author: {
        id: user?.id,
        name: user?.name,
        avatar: user?.avatar,
      },
    });

    history.push(`/rooms/${fbRoom.key}`);
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
          <h2>Criar uma nova sala</h2>
          <div id="separator">ou entre em uma sala</div>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              value={newRoom}
              onChange={(e) => setNewRoom(e.target.value)}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </SHome>
  );
}
