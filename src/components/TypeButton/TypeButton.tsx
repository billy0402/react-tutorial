import React, { useState } from 'react';

import style from './index.scss';

type ButtonProps = {
  text?: string;
  size: 'small' | 'large';
};

const defaultProps: ButtonProps = {
  text: '預設按鈕文字',
  size: 'small',
};

const TypeButton = (props: ButtonProps) => {
//   const text = props.text || '預設按鈕文字';

  return <button type='button'>{props.text}</button>;
};

TypeButton.defaultProps = defaultProps;

export default TypeButton;
