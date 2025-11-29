/**File: ./src/modal/DialogBox.jsx
 * Author: ITA
 * DialogBox: A reusable modal dialog box component using react-modal.
 * This component is a wrapper of elements (e.g. inputs) that must be displayed in a modal dialogbox.
 * You import and use it in a component where you want to display certain contents in a dialog box.
 * 
 * Change Log
 * =========================================================
 * Date                Version     Author    Description
 * =========================================================
 * 2025/11/27    1.0.0         ITA         Genesis. 
 */
/** File: ./src/modal/DialogBox.jsx */
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { useDialogBox } from "./DialogBoxProvider"

// Ensure react-modal accessibility works
Modal.setAppElement('#root');

const modalStyles = {
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        padding: '24px',
        maxWidth: '90vw',
        width: '480px',
        borderRadius: '8px',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1000,
    },
};

export default function DialogBox({ styles = null, children }) {
    const { setCloseFunction, setOpenFunction } = useDialogBox();
    const [isOpen, setIsOpen] = useState(false);

    // Functions to open/close modal
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    // ⚡ Move setters into useEffect to prevent render loops
    useEffect(() => {
        setOpenFunction(openModal);
        setCloseFunction(closeModal);
    }, [setOpenFunction, setCloseFunction]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={styles || modalStyles}
            shouldCloseOnOverlayClick={true}
        >
            {children}
        </Modal>
    );
}

DialogBox.propTypes = {
    styles: PropTypes.object,
    children: PropTypes.node.isRequired,
};