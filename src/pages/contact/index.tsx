import HeaderSubject from 'app.components/Header/HeaderSubject';
import React from 'react';

const index = () => {
  return (
    <>
      <HeaderSubject
        navigation={[
          {
            key: 'Contact',
          },
        ]}
        subject="Contact"
        desc="Collect contacted information."
      />
    </>
  );
};

export default index;
