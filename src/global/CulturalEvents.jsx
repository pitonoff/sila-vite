import { Box, Divider } from '@mui/material'
import React from 'react'
import EventCard from './EventCard'
import logo from '../img/logo.svg';
import Carousel from "react-slick";

const CulturalEvents = () => {
    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button
                className={className}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            />
        );
    }
    const stylesCardImportantEvents = {
        maxHeight: '640px',
        maxWwidth: '670px',
        margin: '10px'
    }
    const stylesCardCloserEvents = {
        width: '427px',
        height: '550px',
        margin: '10px'
    }
    return (
        <div className='mainPageCulturalEvents'>
            <h2 className="title-h2" >Культурные <span className='gradientText'>мероприятия</span></h2>
            <h3 className="title-h3" >Важные события</h3>

            <Divider classes={{ root: 'mydivider' }} />
            <div className='carouselWrapper' >
                <Carousel
                    // dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={2}
                    slidesToScroll={1}
                    className={"center"}
                    display='true'
                    centerMode={true}
                    centerPadding={"0px"}
                    nextArrow={<SampleNextArrow />}
                    prevArrow={<SamplePrevArrow />}
                >
                    <EventCard
                        styles={stylesCardImportantEvents}
                    />
                    <EventCard
                        styles={stylesCardImportantEvents}
                    />
                    <EventCard
                        styles={stylesCardImportantEvents}
                    />
                    <EventCard
                        styles={stylesCardImportantEvents}
                    />
                    <EventCard
                        styles={stylesCardImportantEvents}
                    />
                </Carousel>
            </div>

            <h3 className="title-h3" >Ближайшие события</h3>
            <Divider classes={{ root: 'mydivider' }} />
            <div >
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <EventCard
                        styles={stylesCardCloserEvents}
                    />

                    <EventCard
                        styles={stylesCardCloserEvents}
                    />
                    <EventCard
                        styles={stylesCardCloserEvents}
                    />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <EventCard
                        styles={stylesCardCloserEvents}
                    />

                    <EventCard
                        styles={stylesCardCloserEvents}
                    />
                    <EventCard
                        styles={stylesCardCloserEvents}
                    />
                </div>
            </div>
        </div >
    )
}


export default CulturalEvents
