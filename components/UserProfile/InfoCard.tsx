import { Modal, useMantineTheme } from '@mantine/core'
import React, { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import ProfileInfoEditModal from '../ProfileInfoEditModal/ProfileInfoEditModal'
import styles from './InfoCard.module.css'

const InfoCard = () => {
  const [openModal, setOpenModal] = useState(false)

  const theme = useMantineTheme()
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoHead}>
        <h4>Your Info</h4>
        <AiOutlineEdit
          size={20}
          style={{ cursor: 'pointer' }}
          onClick={() => setOpenModal(true)}
        />
      </div>
      <div className={styles.info}>
        <span>
          <b>Status</b>
        </span>
        <span>In a relationship</span>
      </div>
      <div className={styles.info}>
        <span>
          <b>Lives in</b>
        </span>
        <span>Nepal</span>
      </div>
      <div className={styles.info}>
        <span>
          <b>Works at</b>
        </span>
        <span>Safalza Technology</span>
      </div>
      <button className={styles.logOutBtn}>Log out</button>
      <Modal
        size="55%"
        opened={openModal}
        onClose={() => setOpenModal(false)}
        overlayColor={
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <ProfileInfoEditModal />
      </Modal>
    </div>
  )
}

export default InfoCard
