# Avila

Avila is a real-time, HTTP-based chat application designed for seamless communication across web, desktop, and potentially other platforms. It leverages a robust server architecture and shared code for efficient development and maintenance.

## Architecture

The project is structured into several key components:
- **Server:** A TypeScript-based server that handles WebSocket connections for real-time messaging and provides a REST API for other functionalities.
- **Web Client:** A ReactJS-based web client for browser access, utilizing styled-components for styling.
- **Desktop Client:** A C++ QT-based desktop client for native application experience.
- **Shared Code:** A directory containing shared code, such as data types and API definitions, used across the server and clients.

# Repository structure
```
Avila/
├── server/ # TypeScript server (WebSocket and REST API)
│ ├── src/
│ ├── package.json
│ ├── tsconfig.json
│ └── ...
├── web-client/ # ReactJS web client
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── ...
├── desktop-client/ # C++ QT desktop client
│ ├── src/
│ ├── CMakeLists.txt
│ ├── .pro file or similar
│ └── ...
├── shared/ # Shared code (e.g., data types, API
definitions)
│ └── ...
├── README.md
├── .gitignore
└──
...