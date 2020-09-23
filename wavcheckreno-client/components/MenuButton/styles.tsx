import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';

export const MenuButton = styled(({ ...other }: ButtonProps) => (
  <Button {...other} />
))({
  background: 'white',
  border: 0,
  borderRadius: 10,
  color: 'black',
  height: 32,
  padding: '0 20px',
  '& span': {
    color: 'black',
  },
});
