import { Box } from '@mui/material'
import React from 'react'
import CustomButton from '../common/CustomButton'
import handImage from '../../img/hands.jpg'


const About = () => {
    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            paddingRight: '242px'

        }}>
            <div className="about" >
                <h1 className="title-h1" style={{ position: 'absolute' }}>сила <span className='gradientText'>взаимопомощи</span></h1>
                <div>
                    <h3 className="title-h3" style={{ marginTop: '300px' }}>Проект движения Сила Любви</h3>
                    <br/>
                    <p className="title-text">Цель проекта “Сила взаимопомощи” в развитие социальной сети взаимоподдержки. Здесь вы сможете искать партнеров для коммерческого или социального проекта, принять участие в группе психологической помощи, узнавать о новых интересных культурных событиях или предложить свое, а также получать полезную информацию по психологии и другим направлениям.</p>
                    <br/>
                    <br/>
                    <CustomButton
                    
                        title={'ПРИСОЕДИНИТЬСЯ'}
                        style={{
                            width: '204px',
                            height: '61px',

                            background: 'var(--gradient-primary)',
                            borderRadius: '30px',
                            color: '#F2F2F2',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontSize: '14px',
                            lineHeight: '17px'
                        }}
                    >ПРИСОЕДИНИТЬСЯ</CustomButton>
                </div>
            </div>
            <div>
                <img
                    src={handImage}
                    width='529.29px' height='650px'
                    alt='Изображение двух рук протянутых друг другу' />
            </div>
        </Box >
    )
}

export default About
