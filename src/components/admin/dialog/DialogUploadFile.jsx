import React, {useState} from "react";
import {
    Dialog,
    Button,
    DialogContent,
    DialogTitle,
    Progress,
    DialogFooter,
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    styled,
    LinearProgress,
    DialogActions,
} from '@mui/material';
import {
    Add as AddIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Search as SearchIcon,
    FileUpload as FileUploadIcon,
    FileDownload as FileDownloadIcon,
    CloudUpload as CloudUploadIcon,
    Info as InfoIcon,
    CheckCircleOutline,
} from '@mui/icons-material';


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

const DialogUploadFile = ({open, onClose}) => {
    const [ files, setFiles ] = useState([]);
    const [ uploading, setUploading ] = useState(false);
    const [ progress, setProgress ] = useState(0);

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

        for (let i = 0; i <= 100; i+= 10) {
            await new Promise(resolve => setTimeout(resolve, 500));
            setProgress(i);
        }

        setUploading(false);
        setProgress(100);
    }

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle >
                <CloudUploadIcon/>
                Tải lên ngay
            </DialogTitle>

            {/* Phần chú thích và hướng dẫn */}
            <DialogContent>
                <Box sx={{mb: 3}}>
                    <Typography variant="subtitle2">
                        Lưu ý:
                    </Typography>
                    <List dense> 
                        <ListItem>
                            <ListItemIcon>
                                <InfoIcon color="warning" />
                            </ListItemIcon>
                            <ListItemText primary="Kích thước tối đa: 10MB"/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <InfoIcon color="warning" />
                            </ListItemIcon>
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
                    <CloudUploadIcon sx={{fontSize: 48, color: 'text.secondary', mb: 1}}/>
                    <Typography variant="body1" color="text.secondary">
                        Click để chọn file hoặc kéo thả file vào đây
                    </Typography>
                </UploadBox>

                {/* selected files */}
                {files.length > 0 && (
                    <List sx={{mt: 2}}>
                        {files.map((file, index) => {
                            <ListItem key={index}>
                                <ListItemIcon>
                                    {progress === 100 ? (
                                        <CheckCircleOutline color="success"/>
                                        ) : (
                                            <CloudUploadIcon/>
                                        )}
                                </ListItemIcon>
                                <ListItemText 
                                    primary={file.name}
                                    secondary={`${(file.size / 1024 / 1024).toFixed(2)} MB`}
                                />
                            </ListItem>
                        })}
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
                            {progress}% Tải thành công
                        </Typography>
                    </Box>
                )}
            </DialogContent>

            <DialogActions>
                <Button 
                    onClick={uploadFile}
                    disabled={files.length === 0 || uploading}
                    variant="contained"
                    startIcon={<CloudUploadIcon/>}
                >
                    {uploading ? 'Đang tải...' : "Tải file lên"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DialogUploadFile;