/**File: ./src/modal/SharedModalProvider
 * Author: ITA
 * Provides a context for managing a modal dialog box.
 * Wrapped components can request the modal to open or close via context functions.
 * 
 * Change Log
 * ============
 * Date                Version     Author    Description
 * =========================================================
 * 2025/11/27    1.0.0         ITA         Genesis.
 */
/** File: ./src/modal/DialogBoxProvider.jsx */
import { createContext, useContext, useRef } from 'react';
import PropTypes from 'prop-types';

// Create context
const DialogBoxContext = createContext();

// Provider component
export default function DialogBoxProvider({ children }) {
    const funcs = useRef({});

    // Functions to manage modal state
    const setCloseFunction = (onCloseFunc) => {
        funcs.current.closeFunction = onCloseFunc;
    };

    const requestClose = () => {
        if (funcs.current.closeFunction) funcs.current.closeFunction();
    };

    const setOpenFunction = (openFunc) => {
        funcs.current.openFunction = openFunc;
    };

    const requestOpen = () => {
        if (funcs.current.openFunction) funcs.current.openFunction();
    };

    return (
        <DialogBoxContext.Provider
            value={{ setCloseFunction, requestClose, setOpenFunction, requestOpen }}
        >
            {children}
        </DialogBoxContext.Provider>
    );
}

DialogBoxProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// Custom hook for convenience
export const useDialogBox = () => useContext(DialogBoxContext);
