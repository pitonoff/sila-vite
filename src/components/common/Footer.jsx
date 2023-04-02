import { Box, Divider, IconButton, Link } from "@mui/material";
import React from "react";
import logo from "../../img/logoDefault.png";
import { YouTube, Telegram } from "@mui/icons-material";
import CustomButton from "./CustomButton";

const Footer = () => {
  const linkStyle = {
    underline: "none",
    target: "_blank",
    rel: "noopener",
  };

  return (
    <Box className="box-footer">
      <div>
        <img
          style={{
            margin: "62px 0px 0px",
            gap: 30,
            width: 83,
            height: 83,
          }}
          src={logo}
          alt="Логотип Сила Любви"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "30%",
            verticalAlign: "top",
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: "24px",
              margin: "0px 3px",
            }}
          >
            Проект движения
          </p>
          <p
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "48px",
              margin: 0,
            }}
          >
            СИЛА ЛЮБВИ
          </p>
        </div>
        <div
          className="footer-links"
          style={{
            width: "25%",
          }}
        >
          <Link style={linkStyle} href="#">
            КУЛЬТУРНЫЕ МЕРОПРИЯТИЯ
          </Link>
          <Link style={linkStyle} href="/psycho-support">
            ПСИХОЛОГИЧЕСКАЯ ПОДДЕРЖКА
          </Link>
          <Link style={linkStyle} href="#">
            ДЕЛОВОЕ СОТРУДНИЧЕСТВО
          </Link>
        </div>
        <div
          className="footer-links"
          style={{
            width: "15%",
          }}
        >
          <Link style={linkStyle} href="#">
            О ПРОЕКТЕ
          </Link>
          <Link style={linkStyle} href="#">
            БЛОГ
          </Link>
          <Link style={linkStyle} href="#">
            ПОДДЕРЖАТЬ
          </Link>
        </div>
        <div
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CustomButton
            title={"ОБРАТНАЯ СВЯЗЬ"}
            style={{
              fontSize: "12px",
              color: "var(--main-text-color)",
              gap: 30,
              width: 187,
              height: 61,
              background: "#FFFFFF",
            }}
          />
        </div>
      </div>
      <Divider
        sx={{
          marginRight: "101px",
          borderColor: "#D9D9D9",
        }}
      ></Divider>
      <div style={{ display: "flex", justifyContent: "end", paddingRight: "255px" }}>
        <Link style={{ ...linkStyle, color: "white", fontSize: "14px", padding: "20px"}}href="#">
          Пользовательское соглашение
        </Link>
        <Link style={{ ...linkStyle, color: "white", fontSize: "14px", padding: "20px 80px 20px 20px" }} href="#">
          Политика конфиденциальности
        </Link>
        <IconButton
          sx={{
            padding: 0,
          }}
        >
          <YouTube
            sx={{
              color: "#FFFFFF",
              fontSize: 30,
            }}
          />
        </IconButton>
        <IconButton
          sx={{
            width: 30,
            margin: "0px 15px",
          }}
        >
          <Telegram
            sx={{
              color: "#FFFFFF",
              fontSize: 30,
            }}
          />
        </IconButton>
      </div>
    </Box>
  );
};

export default Footer;
