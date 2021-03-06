import styled from 'styled-components';
import css from '@styled-system/css';
import { Element } from '../Element';

const placeholderStyles = {
  color: 'input.placeholderForeground',
  fontSize: 3,
};

export const Input = styled(Element).attrs({ as: 'input' })(
  css({
    height: 6,
    width: '100%',
    paddingX: 2,
    fontSize: 3,
    borderRadius: 'small',
    backgroundColor: 'input.background',
    border: '1px solid',
    borderColor: 'input.border',
    color: 'input.foreground',
    '::-webkit-input-placeholder': placeholderStyles,
    '::-ms-input-placeholder': placeholderStyles,
    '::placeholder': placeholderStyles,
  })
);
