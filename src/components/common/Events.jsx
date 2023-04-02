import { Divider } from "@mui/material";
import React from "react";
import CustomCard from "./EventCard";
import Carousel from "react-slick";
import CustomButton from "./CustomButton";
import CarouselBlock from "./CarouselBlock";

const Events = ({
  CustomCard,
  cardStyles,
  topic,
  subtopic1,
  subtopic2,
  discription,
  buttonTitle,
}) => {
  return (
    <div>
      <div className="pageStyle">
        <div>
          <h2 className="title-h2">
            {topic.word}
            <span className="gradientText">{topic.wordGradient}</span>
          </h2>
        </div>
        {discription && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p
              className="title-h4"
              style={{ width: "50%", paddingRight: "0 15px" }}
            >
              {discription.discription}
            </p>
            <p
              className="title-text"
              style={{
                width: "50%",
                whiteSpace: "pre-line",
                paddingLeft: "30px",
              }}
            >
              {discription.discription2}
            </p>
          </div>
        )}
        <h3 className="title-h3">{subtopic1}</h3>

        <Divider classes={{ root: "mydivider" }} />
        <CarouselBlock CustomCard={CustomCard} styles={cardStyles.big} />

        <h3 className="title-h3">{subtopic2}</h3>
        <Divider classes={{ root: "mydivider" }} />
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginLeft: '-30px'
            }}
          >
            <CustomCard styles={cardStyles.small} />

            <CustomCard styles={cardStyles.small} />
            <CustomCard styles={cardStyles.small} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginLeft: '-30px'
            }}
          >
            <CustomCard styles={cardStyles.small} />

            <CustomCard styles={cardStyles.small} />
            <CustomCard styles={cardStyles.small} />
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <CustomButton
              title={buttonTitle}
              style={{
                width: "261px",
                height: "61px",
                fontWeight: "500px",
                lineHeight: "17px",
                
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
