// import ncp from 'copy-paste';
const ncp = require('copy-paste');

window.pasteText = async () => {
  const text = await ncp.paste();
  return text;
};

window.copyText = async (text) => {
  await ncp.copy(text);
};
