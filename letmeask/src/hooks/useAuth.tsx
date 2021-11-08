import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from 'react';

import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { auth } from '../services/firebase';

//Auth Context
const AuthContext = createContext({} as AuthContextType);

type TUser = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextType = {
  user: TUser | undefined;
  signInWithGoogle: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<TUser>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: TUser | any) => {
      setStateUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    const { user } = await signInWithPopup(auth, provider);
    setStateUser(user);
  }

  function setStateUser(user: User) {
    if (user) {
      const { displayName, photoURL, uid } = user;

      if (!displayName || !photoURL)
        throw new Error('Missing information from Google Account.');

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}

//Auth Hook
function useAuth() {
  const value = useContext(AuthContext);
  return value;
}

export { useAuth, AuthContextProvider };
