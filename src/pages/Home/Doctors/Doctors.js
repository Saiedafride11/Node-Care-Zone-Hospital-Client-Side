import React, { useEffect, useState } from 'react';
import { CircularProgress, Container, Grid } from '@mui/material';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:5000/doctors')
        fetch('https://tranquil-fortress-32370.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div>
             { doctors?.length === 0 ? 
                    <CircularProgress />
                :
                <>
                    <h2>Our Doctors: {doctors.length}</h2>
                    <Container sx={{p: 5}}>
                        <Grid container spacing={2}>
                                {
                                    doctors?.map(doctor => <Doctor
                                        key={doctor._id}
                                        doctor={doctor}
                                    ></Doctor>)
                                }
                        </Grid>
                    </Container>
                </>
            }
        </div>
    );
};

export default Doctors;