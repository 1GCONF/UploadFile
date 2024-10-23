const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS
app.use(cors());

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to file name
    },
});

const upload = multer({ storage });

// Create the uploads directory if it doesn't exist
const fs = require('fs');
const dir = './uploads';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

// Upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
    const fileUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`; // Create the file URL
    res.json({
        file: {
            path: fileUrl,
            originalname: req.file.originalname,
        },
        message: 'File uploaded successfully!',
    });
});

// Serve static files from the uploads directory
app.use('/uploads', express.static('uploads'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
