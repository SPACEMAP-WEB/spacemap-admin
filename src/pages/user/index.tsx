import HeaderSubject from 'app.components/Header/HeaderSubject';
import ScreenUser from 'app.feature/user/screen/ScreenUser';
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
      <ScreenUser />
    </>
  );
};

export default index;
