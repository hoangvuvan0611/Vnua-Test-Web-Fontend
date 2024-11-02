import React from "react";
import MyAppBar from "../../components/admin/appbar/MyAppBar";
import { Button, ButtonBase, Grid2, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import logoSubject from '../../assets/images/logos/Thesis-rafiki.svg';

const SubjectManagement = () => {

    const theme = useTheme();

    return (
        <div className="subjectManagement" style={{position: 'relative'}}>
            <div className="shadow-sm bg-white" style={{ position: 'sticky', top: 0, left: 0, right: 0, zIndex: 39 }}>
                <MyAppBar label={'Quản lý môn học'}/>
            </div>

            {/* Welcome Section */}
            <Grid2 sx={{ bgcolor: theme.palette.mode === 'dark' ? 'rgb(100, 150, 230)' : 'rgb(100, 150, 230)', height: 250, borderRadius: 2, p: 3, display: 'flex', 
                alignItems: 'center', mt: 8, mb: 4, position: 'relative', ml: 3, mr: 3 }}>
                <Grid2 sx={{marginLeft: 10, xs: 12, md: 3}}>
                    <Typography variant="h4" fontWeight="bold" color="white">Học</Typography>
                    <Typography variant="subtitle1" color="white">Học hỏi là cách duy nhất để vượt qua giới hạn của bản thân.</Typography>
                    <Typography variant="subtitle2" color="white">Học không chỉ để biết, mà còn để làm.</Typography>
                    <br/>
                    <Button variant="contained" size="small" color="primary">
                        Thêm mới môn học
                    </Button>
                </Grid2>
                <Grid2 component="img" src={logoSubject} alt="Illustration" className="sm-hide"
                sx={{ width: 300, marginLeft: 'auto', position: '', right: 10, xs: 12, md: 6, marginRight: 10}}/>
            </Grid2>
        </div>
    );
}

export default SubjectManagement;