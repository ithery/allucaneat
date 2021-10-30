const app = require('../app');
const createFolderIsNotExist = require('../helpers/create_dir');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const UPLOAD_DIR = process.env.UPLOAD_DIR;

// Starts the SERVER
app.listen(PORT, async () => {
  await createFolderIsNotExist(UPLOAD_DIR);
});
