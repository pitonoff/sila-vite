import React from "react";
import About from "../components/homePage/About";
import Events from "../components/common/Events";
import InterestInBlog from "../components/homePage/InterestInBlog";
import EventCard from "../components/common/EventCard";
import ProjectCard from "../components/common/ProjectCard";
import ArticleCard from "../components/common/ArticleCard";

const Home = () => {
  const discription =
    "Мы стремимся развивать деловые связи между участниками сообщества.";
  const discription2 =
    "Здесь представлена информация o коммерческих и социальных проектах участниках сообщества, в которых вы можете принять участие. \n \n Если вы ищете партнеров или сотрудников для своего собственного проекта, вы можете опубликовать на сайте информацию о нем.";
  const stylesEventsCard = {
    big: {
      maxHeight: "640px",
      maxWidth: "670px",
      margin: "30px",
      
    },
    small: {
      maxHeight: "550px",
      maxWidth: "427px",
      margin: "30px",
    },
  };
  const stylesProjectsCard = {
    big: {
      maxHeight: "580px",
      maxWidth: "670px",
      margin: "30px",
    },
    small: {
      maxHeight: "520px",
      maxWidth: "427px",
      margin: "30px",
    },
  };
  return (
    <div className="app">
      {/* <Topbar /> */}
      <About />
      <Events
        CustomCard={EventCard}
        cardStyles={stylesEventsCard}
        topic={{ word: "культурные ", wordGradient: "мероприятия" }}
        subtopic1={"Важные события"}
        subtopic2={"Ближайшие события"}
        discription={""}
        buttonTitle={"Календарь мероприятий"}
      />
      <Events
        CustomCard={ProjectCard}
        cardStyles={stylesProjectsCard}
        topic={{ word: "Деловое ", wordGradient: "сотрудничество" }}
        subtopic1={"Важные проекты"}
        subtopic2={"Другие проекты"}
        discription={{ discription, discription2 }}
        buttonTitle={"Каталог проектов"}
      />
      <InterestInBlog CustomCard={ArticleCard} subtopic1={"Интересное в блоге"} />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
