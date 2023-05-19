import { useState } from 'react';

import { Btn } from './Button.styled';

const Button = () => {
  const [buttonText, setButtonText] = useState('follow');
  const [backgroundColor, setBackgroundColor] = useState('');

  const hendleClick = e => {
    const value = e.currentTarget.textContent.toLowerCase();

    if (value === 'follow') {
      setButtonText('following');
      setBackgroundColor('#5cd3a8');
    } else {
      setButtonText('follow');
      setBackgroundColor('');
    }
  };

  return (
    <>
      <Btn onClick={hendleClick} background={backgroundColor}>
        {buttonText}
      </Btn>
      ;
    </>
  );
};

export default Button;
