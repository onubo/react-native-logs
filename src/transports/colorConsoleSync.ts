import { transportFunctionType } from '../index';

/** Web Console color string constants */
const clientColors: Array<string> = [
  '',
  'color: dodgerblue;font-weight:bold',
  'color: orange;font-weight:bold;',
  'color: indianred;font-weight:bold;',
];

const colorConsoleSync: transportFunctionType = (msg, level, options) => {
  /**
   * Control msg type
   * Here we use JSON.stringify so you can pass object, array, string, ecc...
   */
  let stringMsg: string;
  if (typeof msg === 'string') {
    stringMsg = msg;
  } else if (typeof msg === 'function') {
    stringMsg = '[function]';
  } else {
    stringMsg = JSON.stringify(msg);
  }

  let dateTxt = `${new Date().toLocaleString()} | `;
  let levelTxt = `${level.text.toUpperCase()} | `;

  if (options && options.hideDate) dateTxt = '';
  if (options && options.hideLevel) levelTxt = '';

  let output = `%c${dateTxt}${levelTxt}${stringMsg}`;
  console.log(output, clientColors[level.severity] || '');

  return true;
};

export { colorConsoleSync };
