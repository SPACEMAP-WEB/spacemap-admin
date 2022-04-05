import HeaderSubject from 'app.components/Header/HeaderSubject';
import React from 'react';

const index = () => {
  return (
    <>
      <HeaderSubject
        navigation={[
          {
            key: 'User',
          },
        ]}
        subject="User"
        desc="Summary for users."
      />
    </>
  );
};

export default index;
