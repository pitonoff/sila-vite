import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import FavoriteIconFill from "@mui/icons-material/Favorite";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderRounded";
import { CardActionArea, CardActions, IconButton } from "@mui/material";
import moduleStyles from "../../styles.module.css";

const ProjectCard = ({ handleClick, styles }) => {
  const data = {
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
    title: "Title of EVENT",
    city: "City of EVENT",
    // place: "Place of EVENT",
    text: "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей...",
    organizator: "Organizator of event",
    date: "Date of event",
    cost: "Бесплатно",
  };
  const favorite = true;
  const bigStyle = {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: "20px",
    },
  };
  const smallCardPad1 = styles.maxHeight === "580px" ? "0" : "10px";
  const smallCardPad2 = styles.maxHeight === "580px" ? "0" : "15px";

  //' 'style' doesn't work'
  return (
    <div className="card" style={styles}>
      <div className={"cardBorder"} style={{ padding: "25px" }}>
        <Card
          sx={{
            border: "none",
            borderRadius: "0px",
            boxShadow: "none",
            maxHeight: styles.maxHeight,
            maxWidth: styles.maxWidth,
          }}
        >
          <div style={{ margin: 0, padding: 0, position: "relative" }}>
            <CardActions
              disableSpacing={true}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                top: "20px",
                right: "20px",
              }}
            >
              <IconButton
                onClick={() => alert("favorite")}
                aria-label="add to favorites"
                sx={{
                  width: "40px",
                  height: "40px",
                  background: "var(--main-text-color)",
                  color: "#FFFFFF",
                  opacity: 0.5,
                }}
              >
                {favorite ? (
                  <FavoriteIconFill
                    sx={{
                      color: "#FFFFFF",
                      opacity: 4,
                      zIndex: 999,
                    }}
                  />
                ) : (
                  <FavoriteIcon
                    sx={{
                      color: "#FFFFFF",
                      opacity: 4,
                      zIndex: 999,
                    }}
                  />
                )}
              </IconButton>
            </CardActions>
            <div
              className={moduleStyles.costLabel}
              style={{
                position: "absolute",
                bottom: "13px",
                right: "13px",
              }}
            >
              {data.cost}
            </div>
            <CardMedia
              onClick={() => alert("media")}
              component="img"
              image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
              alt="Paella dish"
            />
          </div>
          <CardActionArea sx={{}}>
            <CardContent
              sx={{
                fontFamily: "Inter, sans-serif",
                padding: "0",
              }}
            >
              <p
                style={{
                  padding: "15px 0 0",
                  margin: 0,
                  fontSize: "20px",
                  lineHeight: "26px",
                  color: "var(--main-text-color)",
                }}
              >
                {data.title}
              </p>

              <p
                style={{
                  padding: "10px 0 0",
                  margin: 0,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "var(--secondary-text-color)",
                }}
              >
                {data.city}
              </p>
              {/* <p
                style={{
                  padding: "10px 0 0",
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: "17px",
                  color: "var(--secondary-text-color)",
                }}
              >
                {data.place}
              </p> */}
              <p
                style={{
                  padding: "10px 0 0",
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: "130%",
                  color: "var(--main-text-color)",
                }}
              >
                {data.text}
              </p>
              {/* 580px - maxHeight of big ProjectCard */}
              <div style={styles.maxHeight === "580px" ? bigStyle.style : {}}>
                <p
                  style={{
                    paddingTop: smallCardPad1,
                    margin: 0,
                    fontSize: "14px",
                    lineHeight: "17px",
                    textDecoration: "underline",
                    color: "var(--secondary-text-color)",
                  }}
                >
                  {data.organizator}
                </p>
                <p
                  style={{
                    paddingTop: smallCardPad2,

                    margin: 0,
                    fontSize: "14px",
                    lineHeight: "130%",
                    color: "var(--main-text-color)",
                  }}
                >
                  Прием заявок до: {data.date}
                </p>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default ProjectCard;
