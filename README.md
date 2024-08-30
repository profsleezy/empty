
# PeerJS Video Chat Application

This is a PeerJS-based video chat application that allows users to connect and communicate with each other through video and text chat. It utilizes WebRTC technology to handle peer-to-peer connections and media streaming.

## Features

- **Video Chat**: Real-time video communication between peers.
- **Text Chat**: Send and receive text messages during video calls.
- **Automatic Reconnection**: Automatically attempts to reconnect if a peer disconnects.
- **Peer Management**: Connects to random peers from a server-side list and handles peer disconnections.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
- **npm**: Node Package Manager, which is included with Node.js.

## Installation

1. **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the server**:

    ```bash
    node app.js
    ```

    This starts the Express server on `http://localhost:3000` (or another port if specified).

4. **Access the application**:

    Open your web browser and navigate to `http://localhost:3000` to use the video chat application.

## Usage

1. **Starting the Application**:

    Upon opening the application in your browser, it will automatically access your webcam and microphone to enable video chat functionality.

2. **Connecting to a Peer**:

    Click on the "Connect to Random Peer" button to initiate a connection with a random available peer. Your video feed will be visible in the left video box, and the remote peer's video will be visible in the right video box.

3. **Sending and Receiving Messages**:

    You can send text messages using the input box and "Send" button in the chat section. Messages will be displayed in real-time in the chat area.

4. **Handling Disconnections**:

    If a peer disconnects, the application will automatically attempt to reconnect to a new random peer. If no peers are available, the status will update to indicate that no peers are available.

## Configuration

- **Server-Side Configuration**:

    The server (`app.js`) manages the list of available peers and handles logging and removing peer IDs. Ensure that the server is running to facilitate peer connections.

- **Client-Side Configuration**:

    The client-side script is contained in `index.html` and interacts with the server to fetch random peers and log peer IDs. Make sure to configure the server URL in the fetch requests if deploying on a different host or port.

## Troubleshooting

- **No Video or Audio**:

    Ensure that your browser has permission to access your webcam and microphone. Check the browser's permissions settings if you encounter issues.

- **Error Connecting to Peer**:

    If you encounter issues connecting to peers, ensure that the server is running and accessible. Check the server logs for any errors.

- **Duplicate Messages**:

    If you see duplicate messages, it may be due to multiple event listeners. Ensure that event listeners are added only once and cleaned up properly.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


---

Feel free to adjust any parts of the README to better fit your specific needs or additional configurations.
