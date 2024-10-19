const express = require('express');
const app = express();
const port = 3000;

// Health Check endpoint for Kubernetes and Prometheus monitoring
app.get('/health', (req, res) => {
    res.status(200).send('Healthy');
});

// Sample API route
app.get('/', (req, res) => {
    res.send('Hello from Node.js App!');
});

app.listen(port, () => {
    console.log(`Node.js app running on port ${port}`);
});
