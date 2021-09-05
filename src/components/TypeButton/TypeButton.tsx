import React, { useState } from 'react';

import style from './index.scss';

type ButtonProps = {
  text?: string;
  size: 'small' | 'large';
  children: string;
};

const defaultProps: ButtonProps = {
  text: '預設按鈕文字',
  size: 'small',
  children: '',
};

const TypeButton: React.FunctionComponent<ButtonProps> = (
  props: ButtonProps,
): JSX.Element => {
  // const text = props.text || '預設按鈕文字';

  return <button type='button'>{props.text}</button>;
};

TypeButton.defaultProps = defaultProps;

export default TypeButton;
