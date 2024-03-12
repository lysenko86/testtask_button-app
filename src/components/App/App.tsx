import { useState } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

import { rootStore } from '../../store';
import { Container, Form } from '../';
import { Button, Popup } from '../../uiComponents';

import styles from './App.module.scss';

export const App = observer(() => {
  const {
    button: {
      label,
      href,
      size,
    },
  } = rootStore;

  const [popupShown, setPopupShown] = useState<boolean>(false);

  const handleClose = () => {
    console.log('send data =', toJS(rootStore));
    setPopupShown(false);
  };

  return (
    <div className={styles.container}>
      <Container>
        <Button
          label={label}
          href={href}
          size={size}
          onClick={() => setPopupShown(true)}
        />
        <Popup
          isShow={popupShown}
          title={label}
          onClose={handleClose}
        >
          <Form />
        </Popup>
      </Container>
    </div>
  );
});
