import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Appointments from '../Appointments/Appointments';
import Calender from '../../Shared/Calender/Calender';

const DashBoardHome = () => {
    const [date, setDate] = useState(new Date())

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
                <Calender date={date} setDate={setDate}></Calender>
            </Grid>
            <Grid item xs={12} md={7}>
                <Appointments date={date}></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashBoardHome;