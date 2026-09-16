import { useCallback, useEffect, useState } from 'react';
import { getUser, logout, onAuthChange } from '@netlify/identity';

/**
 * Tracks the Netlify Identity session used to gate the newsroom admin.
 * Separate from the app's Base44 auth, which covers the product itself.
 */
export function useIdentity() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    getUser().
    then((current) => {
      if (active) {
        setUser(current);
      }
    }).
    finally(() => {
      if (active) {
        setIsLoading(false);
      }
    });

    const unsubscribe = onAuthChange((_event, changedUser) => {
      setUser(changedUser ?? null);
    });

    return () => {
      active = false;
      unsubscribe();
    };
  }, []);

  const signOut = useCallback(async () => {
    await logout();
    setUser(null);
  }, []);

  return { user, isLoading, signOut };
}
