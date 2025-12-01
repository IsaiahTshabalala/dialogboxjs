/**File: ./src/modal/DialogBox.jsx
 * Author: ITA
 * DialogBox: A reusable modal dialog box component using react-modal.
 * This component is a wrapper of elements (e.g. inputs) that must be displayed in a wrapper.
 * You import and use it where in a component where you want to use it to display certain contents in a dialog box.
 * 
 * Change Log
 * =========================================================
 * Date         Version   Author    Description
 * =========================================================
 * 2025/11/27   1.0.0     ITA       Genesis.
 * 2025/11/30   1.0.1     ITA       When this component was imported from its npm published  package (dialogboxjs) into a 
 *                                  vite based project, it complained about a missing PropTypes default import in prop-types.
 *                                  Vite required explicit non-default import of prop-types object.
 * 2025/12/01   1.0.2     ITA       Reverted back to default import of prop-types and tried another workaround for the vite issue.
 *                                  When importing this compoent into a vite based project from its published package the vite
 *                                  issue was still there.
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