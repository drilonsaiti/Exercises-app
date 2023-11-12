// ExerciseList.js

import React, { useState } from 'react';
import ExerciseCard from './ExerciseCard';
import {
    BottomNavigation,
    BottomNavigationAction,
    Box,
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon,
    Typography
} from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import WeekendIcon from '@mui/icons-material/Weekend';
import TimerIcon from '@mui/icons-material/Timer';
import './ExerciseList.css';

const ExerciseList = ({ exerciseData }) => {
    const [selectedDay, setSelectedDay] = useState('monday');

    const showDay = (day) => {
        setSelectedDay(day);
    };

    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleStartTimer = () => {
        // Implement your timer logic here
        console.log('Timer started');
        handleClose();
    };

    const actions = [
        { icon: <TimerIcon />, name: 'Start Timer', onClick: handleStartTimer },
        // Add more actions if needed
    ];

    const totalInfo = {
        monday: '8.6 minutes (Exercise Time) + 4 minutes (Rest Time) = 12.6 minutes',
        wednesday: '8.4 minutes (Exercise Time) + 2 minutes (Rest Time) = 10.4 minutes',
        friday: '9.2 minutes (Exercise Time) + 4 minutes (Rest Time) = 13.2 minutes',
    };

    return (
        <Box>
            <BottomNavigation
                value={selectedDay}
                onChange={(event, newValue) => showDay(newValue)}
                showLabels
                sx={{ backgroundColor: 'white', color: 'white', marginBottom: 2 }}
            >
                <BottomNavigationAction label="Monday" value="monday" icon={<FitnessCenterIcon />} />
                <BottomNavigationAction label="Wednesday" value="wednesday" icon={<AccessibilityNewIcon />} />
                <BottomNavigationAction label="Friday" value="friday" icon={<WeekendIcon />} />
            </BottomNavigation>

            {exerciseData.exercises.map((exercise, index) => (
                <Box key={index} display={selectedDay === exercise.day ? 'block' : 'none'}>
                    <div className={`total ${selectedDay}`}>
                        <Typography>
                            <strong>{selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)}:</strong> {totalInfo[selectedDay]}
                        </Typography>
                    </div>
                    <br />
                    <ExerciseCard exercise={exercise} selectedDay={selectedDay} onTimerStart={handleStartTimer} />
                </Box>
            ))}
        </Box>
    );
};

export default ExerciseList;
