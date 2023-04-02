import { Divider } from "@mui/material";
import React from "react";
import img from "../img/imgMentalSupport.jpg";
import { mentalSupportDiscription } from "../utils/constants";
import PsychoGroupBlock from "../components/common/PsychoGroupBlock";
import onlineChatLogo from '../img/onlineChatLogo.png';
import videoConfLogo from '../img/videoConfLogo.png';


const blockStyle = {
  display: "flex",
  flexDirection: "row",
  paddingTop: "20px",
  paddingBottom: "20px",
};
const dividerStyle = {
  height: "1px",
  background: "var(--gradient-primary)",
};
const description =
  "Группа поддержка — это пространство, где каждый человек может обсудить любую, беспокоящую его тему с другими участниками, выговориться, почувствовать себя услышанным, получить от других обратную связь о тревожащей его ситуации. ";
const description2 =
  "Если вы испытываете беспокойство в связи с происходящими политическими событиями или личными обстоятельствами, вы можете присоединиться к группе поддержке, рассказать о беспокоящей вас ситуации.";
const description3 =
  "Если вас беспокоит та или иная ситуация, вы можете рассказать об этой ситуации (устно на видеовстрече или в письменном виде) и попросить у других участников группы, чтобы они дали вам обратную связь. Вы сами можете сказать о том, какого именно отклика вы ждете в первую очередь. ";

const gradientText = {
  backgroundColor: "#f3ec78",
  backgroundImage: "var(--gradient-primary)",
  backgroundSize: "100%",
  "-webkit-background-clip": "text",
  "-moz-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  "-moz-text-fill-color": "transparent",
}

const MentalSupport = () => {
  
  return (
    <div className="pageStyle">
      <p className="title-h4">Зачем нужна группа поддержки?</p>
      <br />
      <div style={blockStyle}>
        <p
          className="title-text"
          style={{
            width: "50%",
          }}
        >
          {description}
        </p>
        <p
          className="title-text"
          style={{
            width: "50%",
          }}
        >
          {description2}
        </p>
      </div>
      <img
        src={img}
        alt="Логотип Сила Любви"
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          width: "100%",
          height: "580px",
          borderRadius: "10px",
        }}
      />
      <br />
      <div style={blockStyle}>
        <p className="title-h4" style={{ width: "50%" }}>
          Как работает группа поддержки?
        </p>
        <p className="title-text" style={{ width: "50%" }}>
          {description3}
        </p>
      </div>
      <Divider sx={dividerStyle} />
      {mentalSupportDiscription().map((item, index) => (
        <div key={index}>
          <div style={blockStyle} >
            <p className="title-title" style={{ width: "50%" }}>
              {item.title}
            </p>
            <p className="title-text" style={{ width: "50%" }}>
              {item.discription}
            </p>
          </div>
          <Divider sx={{ ...dividerStyle, opacity: '0.4' }} />
        </div>
      ))}

      <h2 style={{ fontSize: "48px", fontWeight: "bold" }}>НАШИ ГРУППЫ <br/> ПСИХОЛОГИЧЕСКОЙ <span style={gradientText}>ПОДДЕРЖКИ</span></h2>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "40px", maxWidth: "1200px", padding: "50px" }}>
        <PsychoGroupBlock icon={onlineChatLogo} text={"В формате видео-встречи"} buttonText={"подробнее"} />

        <PsychoGroupBlock icon={videoConfLogo} text={"В формате онлайн-форума"} buttonText={"присоединиться"} />
      </div>
    </div>
  );
};

export default MentalSupport;
