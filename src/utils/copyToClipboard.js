// src/utils/copyToClipboard.js
export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    alert("Component code copied!");
  });
};
