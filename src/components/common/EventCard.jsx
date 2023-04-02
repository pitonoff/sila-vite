import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import FavoriteIconFill from "@mui/icons-material/Favorite";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderRounded";
import { CardActionArea, CardActions, IconButton } from "@mui/material";
import moduleStyles from "../../styles.module.css";

const EventCard = ({ handleClick, styles }) => {
  const data = {
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
    title: "Title of EVENT",
    city: "City of EVENT",
    place: "Place of EVENT",
    date: "Date of event",
    text: "Текст-заполнитель — это текст, который имеет некоторые характеристики реального письменного текста, но является случайным... ",
    organizator: "Organizator of event",
    cost: "Бесплатно",
  };
  const favorite = true;

  //' 'style' doesn't work'
  return (
    <div className="card cardBorder" style={styles}>
      <div className={"cardBorder"} style={{ padding: "25px" }}>
        <Card
          // onClick={()=>alert("card")}
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
              sx={{
                cursor: "pointer",
                maxHeight: "330px",
                maxWidth: "624px",
              }}
            />
          </div>
          <CardActionArea>
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
                  padding: "15px 0 0",
                  margin: 0,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "var(--secondary-text-color)",
                }}
              >
                {data.city}
              </p>
              <p
                style={{
                  padding: "5px 0 0",
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: "17px",
                  color: "var(--secondary-text-color)",
                }}
              >
                {data.place}
              </p>
              <p
                style={{
                  padding: "15px 0 0",
                  margin: 0,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "var(--main-text-color)",
                }}
              >
                {data.date}
              </p>
              <p
                style={{
                  padding: "15px 0 0",
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: "130%",
                  color: "var(--main-text-color)",
                }}
              >
                {data.text}
              </p>
              <p
                style={{
                  paddingTop: "20px",
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: "17px",
                  textDecoration: "underline",
                  color: "var(--secondary-text-color)",
                }}
              >
                {data.organizator}
              </p>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default EventCard;
