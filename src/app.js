const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

app.use('/api/users', require('./routes/users'));
app.use('/api/distribute', require('./routes/distribute'));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
