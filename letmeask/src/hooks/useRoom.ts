import { useEffect, useState } from "react";

import { db, onValue, ref, get } from "../services/firebase";
import { useAuth } from "./useAuth";

type AdminUser = {
  name: string;
  avatar: string;
}

type TQuestion = {
  id: string;
  author: { avatar: string; name: string };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
  answers: { key: string; content: string }[];
};

//Record: Utilizado p/ criar objetos, ou seja, as posições são:
//Record<chave, valor>

type FbQuestions =
  Record<
    string,
    {
      author: { avatar: string; name: string };
      content: string;
      isAnswered: boolean;
      isHighlighted: boolean;
      likes: Record<string, { authorId: string }>
      answers: Record<string, { content: string }>
    }
  >;



export function useRoom(roomId: string) {
  const { user } = useAuth()
  const [questions, setQuestions] = useState<TQuestion[]>();
  const [title, setTitle] = useState('');
  const [adminUser, setAdminUser] = useState<AdminUser>();

  useEffect(() => {
    const roomRef = ref(db, `/rooms/${roomId}`);

    onValue(roomRef, (room) => {
      const dbRoom = room.val();
      const fbQuestions: FbQuestions = dbRoom.questions ?? {};

      const parsedQuestions = Object.entries(fbQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            author: value.author,
            content: value.content,
            isAnswered: value.isAnswered,
            isHighlighted: value.isHighlighted,
            likeCount: Object.values(value.likes ?? {}).length,
            likeId: Object.entries(value.likes ?? {}).find(([, like]) => like.authorId === user?.id)?.[0],
            answers: Object.entries(value.answers ?? {}).map(([key, answer]) => {
              return { key, content: answer.content };
            }),
          };
        }
      );

      setQuestions(parsedQuestions);
      setTitle(dbRoom.title);
    });
  }, [roomId, user?.id]);

  useEffect(() => {

    async function setStateAdminUser() {
      const data = await get(ref(db, `/rooms/${roomId}`));
      setAdminUser(data.val().author)
    }

    setStateAdminUser();
  }, [roomId])

  return { title, questions, adminUser };
}