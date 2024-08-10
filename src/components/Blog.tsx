import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { BlogViewsUi } from '../style/styled/UserCardViews';

interface IBlog {
  text: 'string';
  children?: ReactNode;
}

const Blog: React.FC<IBlog> = ({ children, text }) => {
  return (
    <>
      <BlogViewsUi>
        <Box>
          {children}
          {text}
        </Box>
      </BlogViewsUi>
    </>
  );
};

export default Blog;
