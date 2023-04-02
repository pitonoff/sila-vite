import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, Link, Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import React from 'react';
import CustomButton from './CustomButton';
import logo from '../../img/logo.svg';
import { linkStyle } from '../../utils/constants';
import { Navigation } from '@mui/icons-material';


const Topbar = () => {


    return (
        <Box>
            <Box display="flex" justifyContent="space-between" p={2}>
                <img src={logo} alt="Логотип Сила Любви" />
                {/* Search Bar */}
                <Box
                    display="flex"
                    backgroundColor="#EFEEEE"
                    borderRadius="30px"
                    width="400px"
                    maxHeight="45px">
                    <IconButton type="button" sx={{ p: 1 }}>
                        <SearchIcon />
                    </IconButton>
                    <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Поиск" />
                </Box>

                <CustomButton title="войти" />
            </Box>
            {/* Navigation */}
            <Box display="flex" justifyContent="space-between" maxWidth="900px" margin="auto" p={1}>

                <Typography>культурные мероприятия</Typography>
                <Typography>психологическая поддержка</Typography>
                <Typography>деловое сотрудничество</Typography>
                <Typography>о проекте</Typography>
                <Typography>блог</Typography>

            </Box>
        </Box>
    )
}

export default Topbar
