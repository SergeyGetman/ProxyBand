import { Box, styled } from '@mui/material';

export const UserCardViewsUi = styled(Box)(({ theme }) => ({
  height: '250px',
  backgroundColor: 'red',

  [theme.breakpoints.between(1651, 2000)]: {
    width: 'calc(20% - 20px)',
  },
  [theme.breakpoints.between(1500, 1650)]: {
    width: 'calc(25% - 18px);',
  },
  [theme.breakpoints.between(1024, 1270)]: {
    width: 'calc(33% - 14px);',
  },
  [theme.breakpoints.between(1270, 1390)]: {
    width: 'calc(33% - 13px);',
  },
  [theme.breakpoints.between(767, 920)]: {
    width: 'calc(50% - 12px);',
  },
}));

export const BlogViewsUi = styled(Box)(({ theme }) => ({
  backgroundColor: '#626b68',

  [theme.breakpoints.between(1651, 2000)]: {
    width: 'calc(20% - 20px)',
  },
}));
