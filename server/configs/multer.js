import multer from "multer";

// Configure Multer storage (empty means default settings)
// By default, Multer stores files in memory with no filename change.
// You can customize destination and filename if needed.
const storage = multer.diskStorage({});

// Create the upload middleware using the defined storage engine
const upload = multer({ storage });

// Export the upload middleware for use in routes
export default upload;
