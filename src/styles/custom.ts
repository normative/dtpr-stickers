import React from 'react';

const custom = {
  link: '#288BE4',
  sessions: {
    sensor: {
      feedback: {
        border: '#BFBFBF',
        background: 'white',
      },
      place: {
        background: '#001B31',
        color: 'white',
        highlight: '#FB4D42',
      },
      faq: {
        fontSize: '0.875rem',
        fontWeight: 300,
        textTransform: 'uppercase' as React.CSSProperties['textTransform'],
      },
    },
  },
  fonts: {
    primary: {
      m: {
        fontSize: '1rem',
        fontFamily: '"Montserrat", sans-serif',
        letterSpacing: '0.75px',
      },
    },
    secondary: {
      m: {
        fontSize: '1rem',
        fontFamily: '"Lora", serif',
        letterSpacing: '0.75px',
      },
      s: {
        fontSize: '0.875rem',
        fontFamily: '"Lora", serif',
        letterSpacing: '0.75px',
      },
      xs: {
        fontSize: '0.75rem',
        fontFamily: '"Lora", serif',
        letterSpacing: '0.75px',
      },
    },
  },
};

export default custom;
