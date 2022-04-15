import HeaderSubject from 'app.components/Header/HeaderSubject'
import ScreenContact from 'app.feature/contact/screen/ScreenContact'
import React from 'react'

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
      <ScreenContact />
    </>
  )
}

export default index
