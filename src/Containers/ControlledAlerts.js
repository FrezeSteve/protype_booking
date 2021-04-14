import React, { useState } from 'react';
import Alert from './Alerts';

export const AlertFadelessExample = (props) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <div>
      <Alert color="primary" isOpen={visible} toggle={onDismiss} fade={false}>
        I am a primary alert and I can be dismissed without animating!
      </Alert>
      </div>
  );
}