import { style } from '@vanilla-extract/css';
import theme from '@/styles/theme/theme';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  padding: '20px',
});

export const textBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'end',
  height: '25%',
});

export const title = style({
  fontSize: '2.2rem',
  fontWeight: 'bold',
});

export const description = style({
  paddingTop: '1vh',
  fontSize: '1.2rem',
});

export const passwordWrapper = style({
  height: '20%',
  justifyContent: 'center',
  alignContent: 'center',
});

export const passwordScreen = style({
  display: 'flex',
});

export const dotWrapper = style({
  paddingRight: '1.2rem',
});

export const dotBeforeInput = style({
  width: '1.7rem',
  height: '1.7rem',
  backgroundColor: theme.gray,
  borderRadius: '100px',
});

export const dotAfterInput = style({
  width: '1.7rem',
  height: '1.7rem',
  backgroundColor: theme.blue,
  borderRadius: '100px',
});
