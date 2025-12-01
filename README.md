# dialogboxjs

 A reusable modal dialog box component using react-modal. It is written in Javascript.
 * This component is a wrapper of elements (e.g. inputs) that must be displayed in a modal dialogbox.
 * You import and use it in a component where you want to display certain contents in a dialog box.

## Installation

```
npm install dialogboxjs
```
---

## Usage Example

```jsx
// File: ./src/MyComponent.jsx
import { DialogBox } from 'dialogboxjs';
import { useDialogBox } from 'dialogboxjs';
import { useEffect, useState } from 'react';

export default function MyComponent() {
    // Custom hook to access functions for opening/closing the dialog box.
    const { requestOpen, requestClose } = useDialogBox();
    const [myInput, setMyInput] = useState('');

    const inputChanged = (e) => {
        setMyInput(e.target.value);
    };

    const closeButtonClicked = () => {
        // Do something before closing the dialog box.
        if (myInput.trim().length > 0) {            
            alert(`You entered: ${myInput}`);
        }

        requestClose();
    }; 
    
    const openButtonClicked = () => {
        // Do something before opening the dialog box.
        setMyInput('');
        requestOpen();
    };

    return (
        <div>
            <h1>DialogBox Example</h1>
            <p>Click the button to open the DialogBox.</p>
            <button onClick={openButtonClicked} >Open Modal</button>
            <DialogBox>
                <h2 >Hello from DialogBox!</h2>
                <input type="text" placeholder="Type something..."
                        value={myInput} onChange={inputChanged} />
                <p>Click the button to close the DialogBox</p>
                <button onClick={closeButtonClicked} >Close Modal</button>
            </DialogBox>
        </div>
    );
}


// ------------------------------------------------------------ 
// File: App.jsx (or any other component .jsx file)
import DialogBoxProvider from 'dialogboxjs';

export default function App() {
    return (
        /* The component that uses the DialogBox component inside them must be wrapped in a
           DialogBoxProvider context hook. */
        <DialogBoxProvider>
            <MyComponent />
        </DialogBoxProvider>
    );
}
```

---

## Notes
 
- Ensure `DialogBoxProvider` wraps all components that use `DialogBox`.
 
- Consumers using CommonJS will need to access the default export via .default:
```
// How to import in code written in CommonJS
const DialogBoxProvider = require('dialogboxjs').default;
const { useDialogProvider, DialogBox } = require('dialogboxjs');
```

---
## License
ISC
