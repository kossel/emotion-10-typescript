/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
jsx; // temp hack

const baseStyle = css({
  background: "pink"
});

export default function Component() {
  return (
    <div className="App">
      <span css={baseStyle}>hello world</span>
    </div>
  );
}
