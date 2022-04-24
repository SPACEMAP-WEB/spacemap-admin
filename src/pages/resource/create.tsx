import HeaderSubject from 'app.components/Header/HeaderSubject'
import ScreenResourceCreate from 'app.feature/resource/screen/ScreenResouceCreate'
import React from 'react'

const index = () => {
  return (
    <>
      <HeaderSubject
        navigation={[
          {
            key: 'Resource',
          },
          { key: 'Create' },
        ]}
        subject="Resource Create"
        desc="Resources for document and media pages."
      />
      <ScreenResourceCreate />
    </>
  )
}

export default index
