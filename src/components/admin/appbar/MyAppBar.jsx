import React, {useState, useEffect} from "react";
import { useNavigate} from "react-router-dom";
import { Box, Toolbar, Card, CardContent, Typography, IconButton } from "@mui/material";
import '../../../assets/styles/admins/MyAppBar.css';

import EventNoteIcon from '@mui/icons-material/EventNote';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar } from "@mui/material";

const MyAppBar = ({label}) => {

    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
            setDate(new Date()); 
        }, 1000);
    }, []);

    return (
        <div className="">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant="h6" fontWeight="bold">dfsdfd</Typography>
                    <Typography variant="body2" color="textSecondary">Monday, 02 March 2020</Typography>
                </Box>
                <Box>
                    <span className="text-gray-600" id='headerBar_clock'>{date.toLocaleTimeString()}</span>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#c531d7" fill="none">
                        <path d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.01576 13.4756C2.08114 16.5411 2.11382 18.0739 3.24495 19.2093C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.755 19.2093C21.8862 18.0739 21.9189 16.5411 21.9842 13.4756C22.0053 12.4899 22.0053 11.51 21.9842 10.5244C21.9189 7.45883 21.8862 5.92606 20.755 4.79063C19.6239 3.6552 18.0497 3.61565 14.9012 3.53654C12.9607 3.48778 11.0393 3.48778 9.09882 3.53653C5.95033 3.61563 4.37608 3.65518 3.24495 4.79062C2.11382 5.92605 2.08113 7.45882 2.01576 10.5243C1.99474 11.51 1.99474 12.4899 2.01576 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                    </svg>
                    </IconButton>
                    <IconButton>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#f0df15" fill="none">
                        <path d="M2.52992 14.394C2.31727 15.7471 3.268 16.6862 4.43205 17.1542C8.89481 18.9486 15.1052 18.9486 19.5679 17.1542C20.732 16.6862 21.6827 15.7471 21.4701 14.394C21.3394 13.5625 20.6932 12.8701 20.2144 12.194C19.5873 11.2975 19.525 10.3197 19.5249 9.27941C19.5249 5.2591 16.1559 2 12 2C7.84413 2 4.47513 5.2591 4.47513 9.27941C4.47503 10.3197 4.41272 11.2975 3.78561 12.194C3.30684 12.8701 2.66061 13.5625 2.52992 14.394Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 21C9.79613 21.6219 10.8475 22 12 22C13.1525 22 14.2039 21.6219 15 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </IconButton>
                    <Avatar sx={{ bgcolor: '#999999', marginLeft: 2 }}>H</Avatar>
                    <Typography variant="body1" sx={{ marginLeft: 1 }}>Hoàng</Typography>
                </Box>
            </Toolbar>
        </div>
    );
}

export default MyAppBar;