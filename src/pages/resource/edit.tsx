import HeaderSubject from "app.components/Header/HeaderSubject";
import ScreenResourceEdit from "app.feature/resource/screen/ScreenResouceEdit";
import React from "react";

const index = () => {
  return (
    <>
      <HeaderSubject
        navigation={[
          {
            key: "Resource",
          },
          { key: "Edit" },
        ]}
        subject="Resource Edit"
        desc="Resources for document and media pages."
      />
      <ScreenResourceEdit />
    </>
  );
};

export default index;
