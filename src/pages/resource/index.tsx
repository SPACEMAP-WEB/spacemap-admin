import HeaderSubject from 'app.components/Header/HeaderSubject'
import ScreenResource from 'app.feature/resource/screen/ScreenResource'
import React from 'react'

const index = () => {
  return (
    <>
      <HeaderSubject
        navigation={[
          {
            key: 'Resource',
          },
        ]}
        subject="Resource"
        desc="Resources for document and media pages."
      />
      <ScreenResource />
    </>
  )
}

export default index
