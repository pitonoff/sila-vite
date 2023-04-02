import { Divider } from "@mui/material";
import React from "react";
import CarouselBlock from "../components/common/CarouselBlock";
import img from "../img/imgMentalSupport.jpg";
import { mentalSupportDiscription } from "../utils/constants";

const BusinessCooperation = () => {
  const blockStyle = {
    display: "flex",
    flexDirection: "row",
    paddingTop: "20px",
    paddingBottom: "20px",
  };
  const stylesCardImportantEvents = {
    minHeight: "640px",
    minWwidth: "670px",
    margin: "10px",
  };
  const dividerStyle = {
    height: "1px",
    background: "var(--gradient-primary)",
  };
  const title =
    "Раздел направлен на развитие деловых связей между участниками сообщества.";
  const discription =
    "Вы сможете найти информацию о коммерческих и социальных проектах участников сообщества, в которых вы можете принять участие. \n \nЕсли вы ищете партнеров или сотрудников для своего собственного проекта, вы можете опубликовать здесь информацию о нем.";
  return (
    <div className="pageStyle">
      <div style={blockStyle}>
        <p className="title-h4" style={{ width: "50%" }}>
          {title}
        </p>
        <p
          className="title-text"
          style={{ width: "50%", whiteSpace: "pre-line" }}
        >
          {discription}
        </p>
      </div>
      <h3 className="title-h3">Важные проекты</h3>

      <Divider classes={{ root: "mydivider" }} />
      <br />
      <CarouselBlock styles={stylesCardImportantEvents} />
    </div>
  );
};

export default BusinessCooperation;
