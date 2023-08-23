'use client';

import React from 'react';
import './style.css';

const copyToClipboard = (text: string, btn: EventTarget) => {
    const button=btn as HTMLElement;
    navigator.clipboard.writeText(text);
    button.classList.add('active');
    setTimeout(()=>button.classList.remove('active'), 750);
}

interface CopyableURLProps{
    url: string;
    displayText: string;
    textToCopy: string;
}

const CopyableURL: React.FC<CopyableURLProps> = ({url, displayText, textToCopy}: CopyableURLProps) => {
  return (
    <div className="CopyableURL">
      <div>
        <a href={url} >{displayText}</a>
      </div>
          <button onClick={(e)=>copyToClipboard(textToCopy,e.target)}>Copy</button>
    </div>
  );
};

export default CopyableURL;
