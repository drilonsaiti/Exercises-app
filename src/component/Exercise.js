import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExerciseList from "./ExerciseList";
import './Exercise.css'
import {Box} from "@mui/material";
const ExerciseTable = () => {
    const initialExercises = {
        "exercises": [
            {
                "day": "monday",
                "items": [
                    {
                        "exercise": "Hip Thrusts",
                        "setsReps": "4 x 10",
                        "restBetweenSets": "20 sec per sets",
                        "restTime": 20,
                        "clickCount": 0,
                        "howToDo": {
                            "type": "video",
                            "src": "/hipthrutsreal.mp4"
                        }
                    },
                    {
                        "exercise": "Bulgarian Split Squats",
                        "setsReps": "3 x 12 per leg",
                        "restBetweenSets": "15 sec per sets",
                        "restTime": 15,
                        "clickCount": 0,
                        "howToDo": {
                            "type": "video",
                            "src": "bulgarian-split%20-%20Trim.mp4"
                        }
                    },
                    {
                        "exercise": "Fire Hydrants",
                        "setsReps": "2 x 15 per leg",
                        "restBetweenSets": "10 sec per sets",
                        "restTime": 10,
                        "clickCount": 0,
                        "howToDo": {
                            "type": "video",
                            "src": "fire-hydrants%20-%20Trim.mp4"
                        }
                    }
                ]
            },
            {
                "day": "wednesday",
                "items": [
                    {
                        "exercise": "Single-Leg Step-Ups",
                        "setsReps": "3 x 10 per leg",
                        "restBetweenSets": "15 sec per sets",
                        "restTime": 15,
                        "clickCount": 0,
                        "howToDo": {
                            "type": "video",
                            "src": "hip%20thruts.mp4"
                        }
                    },
                    {
                        "exercise": "Glute Bridge",
                        "setsReps": "4 x 15",
                        "restBetweenSets": "20 sec per sets",
                        "restTime": 20,
                        "clickCount": 0,
                        "howToDo": {
                            "type": "video",
                            "src": "glutes-birdge%20-%20Trim.mp4"
                        }
                    },
                    {
                        "exercise": "Glute Kickback",
                        "setsReps": "2 x 12 per leg",
                        "restBetweenSets": "10 sec per sets",
                        "restTime": 10,
                        "clickCount": 0,
                        "howToDo": {
                            "type": "image",
                            "src": "kickbacks.png"
                        }
                    }
                ]
            },
            {
                "day": "friday",
                "items": [
                    {
                        "exercise": "Banded Romanian Deadlift",
                        "setsReps": "4 x 12",
                        "restBetweenSets": "20 sec per sets",
                        "restTime": 20,
                        "clickCount": 0,
                        "howToDo": {
                            "type": "video",
                            "src": "romanian-deadlift%20-%20Trim.mp4"
                        }
                    },
                    {
                        "exercise": "Step UPS",
                        "setsReps": "3 x 16 (8 per leg)",
                        "restBetweenSets": "15 sec per sets",
                        "restTime": 15,
                        "clickCount": 0,
                        "howToDo": {
                            "type": "video",
                            "src": "stepups.mp4"
                        }
                    },
                    {
                        "exercise": "Side Open",
                        "setsReps": "4 x 15",
                        "restBetweenSets": "10 sec per sets",
                        "restTime": 10,
                        "clickCount": 0,
                        "howToDo": {
                            "type": "video",
                            "src": "side.mp4"
                        }
                    }
                ]
            }
        ]
    };
    const [exerciseData, setExerciseData] = useState(initialExercises);

    return (
        <Box sx={{ padding: 2 }} style={{backgroundColor: '#f7f7f7'}}>
            <div className="reminder">
                <p><strong>Reminder:</strong> Remember to warm up before each workout, and stretch after each workout. Drink plenty
                    of <strong>water</strong>, and eat a balanced diet that supports your muscle growth.</p>
            </div>
            <ExerciseList exerciseData={exerciseData} />
        </Box>
    );
};

export default ExerciseTable;
