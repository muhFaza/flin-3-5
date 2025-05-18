require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const authRoutes = require('./routes/auth');
const leadRoutes = require('./routes/leads');
const { authenticateToken } = require('./middlewares/auth');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/leads', authenticateToken, leadRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
