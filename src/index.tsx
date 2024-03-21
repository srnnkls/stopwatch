import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "src/style/global.css";

import App from "src/components/App";

const handleMessage = (event: MessageEvent) => {
  if (event.origin === 'aaa') {
    console.log('Received message:', event.data);
  }
  console.log('Not trusted!');
};

window.addEventListener('message', handleMessage);


ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

window.addEventListener('beforeunload', () => {
  window.removeEventListener('message', handleMessage);
});