import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './stylesComponents.module.scss';
import CarouselComponent from './CarouselComponent';
import { Skeleton } from '@mui/material';

const showSkeleton = () => {
  return (
    <>
      <Skeleton variant="rectangular" width={210} height={118} />
    </>
  );
};

function ModalWindow() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.blockModal}>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.blockModal__modalWindow}>
          <Typography
            className={styles.blockModal__modalWindow}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            <CarouselComponent />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default ModalWindow;
