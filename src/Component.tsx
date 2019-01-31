import React from 'react';
import { css } from '@emotion/core';

const baseStyle = css({
  background: "pink"
});

export default function Component() {
  return (
    <div className="App">
      <span css={{ baseStyle }}>hello world</span>
    </div>
  );
}
