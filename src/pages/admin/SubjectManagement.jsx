import React from "react";
import MyAppBar from "../../components/admin/appbar/MyAppBar";
import { Avatar, Button, ButtonBase, Card, CardContent, Chip, Grid2, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import logoSubject from '../../assets/images/logos/Thesis-rafiki.svg';
import { green } from "@mui/material/colors";

const SubjectManagement = () => {

    const theme = useTheme();

    const orderItems = [
        { name: 'Scrambled eggs with toast', qty: 1, price: 16.99 },
        { name: 'Smoked Salmon Bagel', qty: 1, price: 18.49 },
        { name: 'Belgian Waffles', qty: 2, price: 38.98 },
        { name: 'Classic Lemonade', qty: 1, price: 12.49 },
    ];

    const totalAmount = orderItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="subjectManagement" style={{position: 'relative'}}>
            <div className="shadow-sm bg-white" style={{ position: 'sticky', top: 0, left: 0, right: 0, zIndex: 39 }}>
                <MyAppBar label={'Quản lý môn học'}/>
            </div>

            {/* Welcome Section */}
            <Grid2 sx={{ bgcolor: theme.palette.mode === 'dark' ? 'rgb(100, 150, 230)' : 'rgb(100, 150, 230)', height: 200, borderRadius: 2, p: 3, display: 'flex', 
                alignItems: 'center', mt: 2, mb: 4, position: 'relative', ml: 3, mr: 3 }}>
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
                sx={{ width: 220, marginLeft: 'auto', position: '', right: 10, xs: 12, md: 6, marginRight: 10}}/>
            </Grid2>

            {/* Subject Card session */}
            <Grid2 container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12, xl: 12 }} sx={{ml: 3, mr: 3}}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid2 key={index} size={{ xs: 2, sm: 4, md: 4, xl: 3 }}>
                        <Card sx={{ maxWidth: 400, margin: 'auto', borderRadius: 2, boxShadow: 3, padding: 2 }}>
                            <CardContent>
                                <Grid2 container justifyContent="space-between" alignItems="center">
                                    <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                                        VV
                                    </Avatar>
                                    <Typography variant="h6">
                                        A4
                                    </Typography>
                                    <Chip label="Ready" color="success" />
                                </Grid2>
                                <Typography variant="subtitle2" color="textSecondary">
                                Order #925 / Dine In
                                </Typography>
                                <Typography variant="body2" color="textSecondary" gutterBottom>
                                Wed, July 12, 2023
                                </Typography>
                                <Typography variant="body2" color="textSecondary" align="right">
                                06:12 PM
                                </Typography>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                        <TableCell>Items</TableCell>
                                        <TableCell align="center">Qty</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {orderItems.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell align="center">{item.qty}</TableCell>
                                            <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                                        </TableRow>
                                        ))}
                                        <TableRow>
                                        <TableCell colSpan={2}>Total</TableCell>
                                        <TableCell align="right">${totalAmount.toFixed(2)}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>

                                <Grid2 container spacing={2} sx={{ mt: 2 }}>
                                    <Grid2 item xs={6}>
                                        <Button variant="outlined" fullWidth>
                                        See Details
                                        </Button>
                                    </Grid2>
                                    <Grid2 item xs={6}>
                                        <Button variant="contained" color="warning" fullWidth>
                                        Pay Bills
                                        </Button>
                                    </Grid2>
                                </Grid2>
                            </CardContent>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </div>
    );
}

export default SubjectManagement;