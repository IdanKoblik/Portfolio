import { useEffect } from 'react';

const RedirectToResume = () => {
  useEffect(() => {
    window.location.href = 'https://docs.google.com/document/d/1v6oBpxpeCEHZD526f9fAXt_mWIaGFa27zSV4djwcdZg/edit?usp=sharing';
  }, []);
  return null;
};

export default RedirectToResume;
