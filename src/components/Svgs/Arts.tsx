import React from 'react';
import { SVGProps } from 'common/types';

function Arts({
  fill = '#000000', transform,
}: SVGProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" data-export-icon viewBox="0 0 24 24" version="1.1">
      <defs>
        <polygon id="path-arts-1" points="0 7.23681097e-05 18.8778118 7.23681097e-05 18.8778118 20 0 20" />
      </defs>
      <g id="dtpr_icons-/-purpose-/-arts" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform={transform}>
        <g id="Group-3" strokeWidth="1" fillRule="evenodd" transform="translate(3.000000, 2.000000)">
          <mask id="mask-arts-2" fill="white">
            <use xlinkHref="#path-arts-1" />
          </mask>

          <path d="M15.3343,7.271 C14.5203,7.692 13.5233,7.375 13.1023,6.56 C12.6813,5.747 12.9993,4.75 13.8133,4.329 C14.6273,3.908 15.6243,4.225 16.0453,5.04 C16.4663,5.853 16.1483,6.85 15.3343,7.271 M10.3633,4.869 C9.5493,5.29 8.5523,4.972 8.1313,4.159 C7.7103,3.344 8.0283,2.347 8.8423,1.926 C9.6563,1.505 10.6533,1.823 11.0743,2.637 C11.4953,3.452 11.1773,4.448 10.3633,4.869 M5.4593,7.405 C4.6453,7.826 3.6473,7.508 3.2273,6.694 C2.8063,5.879 3.1233,4.883 3.9383,4.462 C4.7513,4.042 5.7493,4.359 6.1693,5.172 C6.5903,5.987 6.2733,6.984 5.4593,7.405 M4.5443,12.849 C3.7303,13.27 2.7333,12.953 2.3133,12.139 C1.8923,11.325 2.2093,10.328 3.0233,9.907 C3.8373,9.486 4.8343,9.803 5.2553,10.618 C5.6763,11.431 5.3593,12.428 4.5443,12.849 M5.3763,1.233 C0.5013,3.752 -1.4087,9.75 1.1113,14.625 C3.6323,19.5 9.6283,21.409 14.5033,18.888 C15.3173,18.467 15.6353,17.47 15.2143,16.656 C15.0163,16.274 14.6913,16.006 14.3193,15.863 C13.9623,15.725 13.6373,15.458 13.4443,15.084 C13.0233,14.271 13.3413,13.274 14.1553,12.853 L15.8913,11.956 C18.5993,10.556 19.6603,7.222 18.2603,4.515 C16.0193,0.18 10.2513,-1.288 5.3763,1.233" id="Fill-1" fill={fill} mask="url(#mask-arts-2)" />
        </g>
      </g>
    </svg>
  );
}

export default Arts;
