import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { consumeAuthCallback } from '@/lib/identityAuthFlow';

/**
 * Processes Netlify Identity links (invites, password resets, confirmations)
 * wherever they land, then sends the author to the newsroom admin.
 */
export default function IdentityCallbackHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;

    consumeAuthCallback().then((result) => {
      if (!active || !result) {
        return;
      }
      if (result.type === 'invite' || result.type === 'recovery' || result.type === 'confirmation') {
        navigate('/admin/news', { replace: true });
      }
    });

    return () => {
      active = false;
    };
  }, [navigate]);

  return null;
}
