import { useState, useRef } from 'react';
import styles from '../styles/ModalStyles.module.css';

function useModal (component) {
    const [isOpen, setIsOpen] = useState(false);

    const modal = useRef(null);

    const handleModalClick = (e) => {
        if (modal.current.contains(e.target)){
            return;
        } else {
            setIsOpen(!isOpen);
        }
    }

    const ModalBox = () => {
        return(
            <>
                {
                    isOpen && (
                        <div className={styles.modal}>
                            <button className={styles.modalBtn} onClick={handleModalClick}>X</button>
                            <div className={styles.innerModal}>
                                {component}
                            </div>
                        </div>
                    )
                }
            </>
        )
    }

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

    return [ModalBox, handleModal];
}

export default useModal;