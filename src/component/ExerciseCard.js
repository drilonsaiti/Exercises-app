import React, { useState, useEffect } from 'react';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import TimerIcon from '@mui/icons-material/Timer';
import './ExerciseCard.css';

const ExerciseCard = ({ exercise, selectedDay, onTimerStart }) => {
    const [classNames, setClassNames] = useState(selectedDay);
    const [restTime, setRestTime] = useState(0);
    const [exerciseClickCounts, setExerciseClickCounts] = useState({});

    useEffect(() => {
        setClassNames(selectedDay);
    }, [selectedDay]);

    const handleStartTimer = (time, exerciseName) => {
        setRestTime(time);
        onTimerStart();
        handleTimerStart(exerciseName);
    };

    const handleTimerStart = (exerciseName) => {
        setExerciseClickCounts(prevCounts => ({
            ...prevCounts,
            [exerciseName]: (prevCounts[exerciseName] || 0) + 1,
        }));
    };

    const [soundPlayed, setSoundPlayed] = useState(false);

    useEffect(() => {
        let interval;
        const sound = new Audio('/last-three.mp3');
        let soundPlayedDuringInterval = false;

        if (restTime > 0) {
            interval = setInterval(() => {
                setRestTime(prevTime => {
                    if (prevTime === 1) {
                        handleTimerStart(exercise.exercise);
                    }

                    if (prevTime == 4 && !soundPlayedDuringInterval) {
                        sound.play();
                        setSoundPlayed(true);
                    }

                    if (prevTime === 0) {
                        sound.pause();
                        sound.currentTime = 0;
                        setSoundPlayed(false);
                    }

                    console.log(prevTime);
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => {
            clearInterval(interval);
            // Reset soundPlayedDuringInterval in the cleanup function
            setSoundPlayed(false);
        };
    }, [restTime, exercise]);

    return (
        <Box>
            {exercise.items.map((item, index) => (
                <Card key={index} sx={{ maxWidth: '100%', marginBottom: 2 }} className={classNames}>
                    <CardActionArea>
                        {item.howToDo.type === 'video' ? (
                            <CardMedia
                                component="video"
                                height="140"
                                src={item.howToDo.src}
                                alt={item.exercise}
                                controls
                                muted
                            />
                        ) : (
                            <CardMedia
                                component="img"
                                height="140"
                                src={item.howToDo.src}
                                alt={item.exercise}
                            />
                        )}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.exercise}
                            </Typography>
                            <Typography variant="h7" color="text.secondary" style={{ textAlign: 'center' }}>
                                Sets x Reps: {item.setsReps} <br /> Rest Between Sets: {item.restBetweenSets}
                                <br/> Sets done: {exerciseClickCounts[item.exercise] || 0}
                                <br/>
                            </Typography>
                            <TimerIcon
                                onClick={() => handleStartTimer(item.restTime, item.exercise)}
                                style={{ fontSize: 30, cursor: 'pointer',}}
                            />
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
            {restTime > 0 && (
                <div className="timer-overlay">
                    <div className="timer-text">{restTime}</div>
                </div>
            )}
        </Box>
    );
};

export default ExerciseCard;
