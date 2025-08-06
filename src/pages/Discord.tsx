import { useEffect } from 'react';

const RedirectToDiscord = () => {
  useEffect(() => {
    window.location.href = 'https://discord.com/users/429212281914785793';
  }, []);
  return null;
};

export default RedirectToDiscord;