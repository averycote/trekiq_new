import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthError, acceptInvite, login, requestPasswordRecovery, updateUser } from '@netlify/identity';
import { KeyRound, Loader2, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { consumeAuthCallback } from '@/lib/identityAuthFlow';

function messageForError(error) {
  if (error instanceof AuthError) {
    if (error.status === 401) {
      return 'That email and password combination does not match an account.';
    }
    if (error.status === 403) {
      return 'That action is not allowed for this site.';
    }
    if (error.status === 404) {
      return 'No account was found for that email address.';
    }
    if (error.status === 422) {
      return 'Please check the details you entered and try again.';
    }
    return error.message;
  }
  return error.message || 'Something went wrong. Please try again.';
}

const COPY = {
  signin: {
    title: 'Newsroom sign in',
    subtitle: 'Sign in with your Netlify Identity account to write and publish posts.',
    action: 'Sign in'
  },
  forgot: {
    title: 'Reset your password',
    subtitle: 'We’ll email you a link to choose a new password.',
    action: 'Send reset link'
  },
  invite: {
    title: 'Finish setting up your account',
    subtitle: 'Choose a password to accept your newsroom invitation.',
    action: 'Create account'
  },
  recovery: {
    title: 'Choose a new password',
    subtitle: 'Your reset link is verified. Set a new password to continue.',
    action: 'Save password'
  }
};

export default function AdminAuthCard() {
  const [mode, setMode] = useState('signin');
  const [inviteToken, setInviteToken] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [isBusy, setIsBusy] = useState(false);

  // Switch into invite / recovery mode when the visitor arrived from an email link.
  useEffect(() => {
    let active = true;

    consumeAuthCallback().then((result) => {
      if (!active || !result) {
        return;
      }
      if (result.type === 'invite') {
        setInviteToken(result.token);
        setMode('invite');
      } else if (result.type === 'recovery') {
        setMode('recovery');
      } else if (result.type === 'error') {
        setError(result.message);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  const copy = COPY[mode];
  const needsEmail = mode === 'signin' || mode === 'forgot';
  const needsPassword = mode !== 'forgot';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setStatus('');
    setIsBusy(true);

    try {
      if (mode === 'signin') {
        await login(email, password);
      } else if (mode === 'forgot') {
        await requestPasswordRecovery(email);
        setStatus('Check your inbox for a password reset link.');
      } else if (mode === 'invite' && inviteToken) {
        await acceptInvite(inviteToken, password);
      } else if (mode === 'recovery') {
        await updateUser({ password });
        setStatus('Password updated.');
      }
    } catch (submitError) {
      setError(messageForError(submitError));
    } finally {
      setIsBusy(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-sm">
      <div
        className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl"
        style={{ backgroundColor: 'hsl(206 64% 49% / 0.12)' }}>

        {mode === 'signin' ?
        <Lock className="h-6 w-6 text-[hsl(206_64%_49%)]" /> :

        <KeyRound className="h-6 w-6 text-[hsl(206_64%_49%)]" />
        }
      </div>

      <h1 className="text-2xl font-bold text-primary">{copy.title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{copy.subtitle}</p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        {needsEmail &&
        <div>
            <Label htmlFor="identity-email">Email</Label>
            <Input
            id="identity-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@trekiq.ca"
            className="mt-2"
            required />

          </div>
        }

        {needsPassword &&
        <div>
            <Label htmlFor="identity-password">
              {mode === 'signin' ? 'Password' : 'New password'}
            </Label>
            <Input
            id="identity-password"
            type="password"
            autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="••••••••"
            className="mt-2"
            required
            minLength={8} />

          </div>
        }

        {error && <p className="text-sm text-destructive">{error}</p>}
        {status && <p className="text-sm font-medium text-[hsl(206_64%_49%)]">{status}</p>}

        <Button
          type="submit"
          disabled={isBusy}
          className="h-11 w-full font-semibold text-white"
          style={{ backgroundColor: 'hsl(206 64% 49%)' }}>

          {isBusy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {copy.action}
        </Button>
      </form>

      {mode === 'signin' &&
      <button
        type="button"
        className="mt-4 text-sm text-muted-foreground underline underline-offset-2 hover:text-primary"
        onClick={() => {
          setMode('forgot');
          setError('');
          setStatus('');
        }}>

          Forgot your password?
        </button>
      }

      {mode === 'forgot' &&
      <button
        type="button"
        className="mt-4 text-sm text-muted-foreground underline underline-offset-2 hover:text-primary"
        onClick={() => {
          setMode('signin');
          setError('');
          setStatus('');
        }}>

          Back to sign in
        </button>
      }

      <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
        Accounts are managed in Netlify under Project configuration &gt; Identity. Looking for the public
        newsroom? <Link to="/news" className="underline underline-offset-2">View it here</Link>.
      </p>
    </div>);

}
