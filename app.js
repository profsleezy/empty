const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

let connectedPeers = [];

// Serve static files from the "public" directory
app.use(express.static('public'));

// Endpoint to log peer ID
app.post('/log-peer', express.json(), (req, res) => {
    const peerId = req.body.peerId;
    console.log(`Peer connected: ${peerId}`);

    if (!connectedPeers.includes(peerId)) {
        connectedPeers.push(peerId);
        updatePeerLog();
    }

    res.send('Peer ID logged successfully');
});

// Endpoint to remove peer IDs on connection
app.post('/remove-peers', express.json(), (req, res) => {
    const { peerId1, peerId2 } = req.body;
    console.log(`Removing peer IDs: ${peerId1} and ${peerId2}`);

    connectedPeers = connectedPeers.filter(id => id !== peerId1 && id !== peerId2);
    updatePeerLog();

    res.send('Peer IDs removed successfully');
});

// Endpoint to get a random peer ID
app.get('/random-peer', (req, res) => {
    if (connectedPeers.length === 0) {
        return res.status(404).send('No peers available');
    }

    // Select a random peer ID from the list
    const randomPeerId = connectedPeers[Math.floor(Math.random() * connectedPeers.length)];
    res.json({ peerId: randomPeerId });
});

function updatePeerLog() {
    const logFilePath = path.join(__dirname, 'peer-ids.txt');
    fs.writeFile(logFilePath, connectedPeers.join('\n'), (err) => {
        if (err) {
            console.error('Failed to update file', err);
        }
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
