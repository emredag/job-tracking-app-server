
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());


app.use((req, res, next) => {
    res.status(200).json([
        {
            job_name: 'Urgent',
            job_id: "1",
        },
        {
            job_name: 'Regular',
            job_id: "2",
        },
        {
            job_name: 'Trivial',
            job_id: "3",
        }
    ])
})

module.exports = app;