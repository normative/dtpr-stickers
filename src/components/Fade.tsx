import React from 'react';
import { Transition } from 'react-transition-group';

const DEFAULT_DURATION = 300;

const defaultStyle = (timeout: number = DEFAULT_DURATION) => ({
  transition: `opacity ${timeout}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
  opacity: 0,
});

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: {
    opacity: 0,
    pointerEvents: 'none',
  },
  exited: {
    opacity: 0,
    pointerEvents: 'none',
  },
};

interface Props {
  in: boolean;
  timeout: number;
  children: React.ReactNode;
  innerRef: any;
}

function Fade({
  in: inProp, timeout = DEFAULT_DURATION, children, innerRef,
}: Props) {
  return (
    <Transition in={inProp} timeout={timeout} nodeRef={innerRef}>
      {(state) => (
        <div style={{
          ...defaultStyle(timeout),
          ...transitionStyles[state],
        }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}

export default Fade;
