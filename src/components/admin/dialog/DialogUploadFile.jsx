import React, {useState} from "react";
import {
    Dialog,
    Button,
    DialogContent,
    DialogTitle,
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    styled,
    LinearProgress,
    DialogActions,
    keyframes,
} from '@mui/material';
import {
    CloudUpload as CloudUploadIcon,
    Info as InfoIcon,
    CheckCircleOutline,
    ErrorOutline,
} from '@mui/icons-material';
import axios from "axios";


// Style commonent vùng upload
const UploadBox = styled(Box)(({theme}) => ({
    border: `2px dashed ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(3),
    textAlign: 'center',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const uploadAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-0.5rem);
    }
    100% {
        transform: translateY(0);
    }
`;

const DialogUploadFile = ({open, onClose, title}) => {

    const [ files, setFiles ] = useState([]);
    const [ uploading, setUploading ] = useState(false);
    const [ progress, setProgress ] = useState(0);
    const [ uploadError, setUploadError ] = useState(null);
    const [ uploadProgress, setUploadProgress ] = useState(0);
    const [ serverProcessingTime, setServerProcessingTime ] = useState(0); 

    const allowedFileTypes = [
        '.xls',
        '.xlsx',
        '.json',
        '.csv'
    ];

    const handleFileSelect = (event) => {
        const selectedFile = Array.from(event.target.files)
        setFiles(selectedFile);
    }

    const uploadFile = async () => {
        setUploading(true);
        setProgress(0);
        setUploadError(null);

        const formData = new FormData();
        formData.append('file', files);

        const uploadConfig = {
            onUploadProgress: (progressEvent) => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setUploadProgress(percentCompleted);
            }
        };

        try {
            const startTime = performance.now();
            await axios.post('/file/readFile', formData, uploadConfig);
            const endTime = performance.now();

            setServerProcessingTime(endTime - startTime);
            const isSuccess = Math.random() < 0.8;

            for (let i = 0; i <= 100; i+= 10) {
                await new Promise(resolve => setTimeout(resolve, 500));
                setProgress(i);
            }
    
            if (isSuccess) {
                setUploadError(null);
            } else {
                setUploadError("Có lỗi xảy ra khi tải lên. Vui lòng thử lại!");
            }

        } catch (error) {
            setUploadError("Có lỗi xảy ra khi tải lên. Vui lòng thử lại!");
        } finally {
            setUploading(false);
            setProgress(100);
        }
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle >
                {title}
            </DialogTitle>

            {/* Phần chú thích và hướng dẫn */}
            <DialogContent>
                <Box sx={{mb: 1}}>
                    <Typography variant="subtitle2">
                        Lưu ý:
                    </Typography>
                    <List dense> 
                        <ListItem>
                            <InfoIcon color="warning" sx={{mr: 1}}/>
                            <ListItemText primary="Kích thước tối đa: 10MB"/>
                        </ListItem>
                        <ListItem>
                            <InfoIcon color="warning" sx={{mr: 1}}/>
                            <ListItemText primary={`Định dạng file được hỗ trợ: ${allowedFileTypes.join(', ')}`}/>
                        </ListItem>
                    </List>
                </Box>

                {/* Upload area */}
                <UploadBox onClick={() => document.getElementById('file-input').click()}>
                    <input 
                        id="file-input" 
                        type="file"
                        multiple
                        hidden
                        onChange={handleFileSelect}
                        accept={allowedFileTypes.join(',')}
                    />
                    <CloudUploadIcon sx={{fontSize: 48, color: uploading ? 'turquoise' : 'text.secondary', mb: 1, animation: uploading ? `${uploadAnimation} 1s ease-in-out infinite`: 'none'}}/>
                    <Typography variant="body1" color="text.secondary">
                        Click để chọn file hoặc kéo thả file vào đây
                    </Typography>
                </UploadBox>

                {/* selected files */}
                {files.length > 0 && (
                    <List sx={{mt: 1}}>
                        {files.map((file, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    {progress === 100 ? (
                                        uploadError ? (
                                            <ErrorOutline color="error"/>
                                        ) : (
                                            <CheckCircleOutline color="success"/>
                                        )) : (
                                            null
                                        )}
                                </ListItemIcon>
                                <ListItemText 
                                    primary={file.name}
                                    secondary={`${(file.size / 1024 / 1024).toFixed(2)} MB`}
                                />
                            </ListItem>
                        ))}
                    </List>
                )}

                {/* Upload progress */}
                {uploading && (
                    <Box sx={{mt: 2}}>
                        <LinearProgress 
                            variant="determinate"
                            value={progress}
                            sx={{mb: 1}}
                        />
                        <Typography variant="body2" align="center">
                            Đang tải: {uploadProgress}%
                        </Typography>
                    </Box>
                )}

                {/* Upload error */}
                {uploadError && (
                    <Box sx={{ mt: 2, color: 'error.main', display: 'flex', alignItems: 'center', gap: 1 }}>
                        <ErrorOutline/>
                        <Typography variant="body2">{uploadError}</Typography>
                    </Box>
                )}
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} variant="contained" sx={{textTransform: 'none'}}>Hủy</Button>
                <Button 
                    onClick={uploadFile}
                    disabled={files.length === 0 || uploading}
                    variant="contained"
                    startIcon={<CloudUploadIcon/>}
                    sx={{textTransform: 'none'}}
                >
                    {uploading ? 'Đang tải...' : "Tải file lên"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DialogUploadFile;