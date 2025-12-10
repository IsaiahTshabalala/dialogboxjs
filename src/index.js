/**
 * File: ./src/index.js
 * Package exports.
 * ==============================================================================
 * Change log:
 * Date        Dev    Version   Description
 * 2025/11/29  ITA    1.0.0     Genesis.
 * 2025/12/10  ITA    1.0.1     All default exports changed to named exports. To improve tree-shaking in consumers
 *                              that use modern bundlers such as Vite and Webpack.
 */
import { DialogBoxProvider, useDialogBox } from "./modal/DialogBoxProvider";
import { DialogBox } from "./modal/DialogBox";

export { DialogBoxProvider, useDialogBox, DialogBox };