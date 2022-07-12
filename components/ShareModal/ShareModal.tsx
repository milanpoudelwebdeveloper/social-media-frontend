import React from 'react'
import { Modal, useMantineTheme } from '@mantine/core'
import PostShare from '../PostSide/PostShare'

interface props {
  openModal: boolean
  closeModal: () => void
}

const ShareModal: React.FC<props> = ({ openModal, closeModal }) => {
  const theme = useMantineTheme()
  return (
    <Modal
      overlayColor={
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={openModal}
      onClose={closeModal}
      size="55%"
    >
      <PostShare />
    </Modal>
  )
}

export default ShareModal
