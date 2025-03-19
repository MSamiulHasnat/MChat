

File Structure:-
![alt text](/frontend/public/FileStructureForREADME.png)
MChat/
├── README.md                  # Project overview, setup instructions, and documentation.
├── docs/
│   └── architecture.md        # Detailed project architecture, design decisions, and feature lists.
├── backend/
│   ├── app/
│   │   ├── __init__.py        # Initialize the backend package.
│   │   ├── config.py          # Configuration settings (e.g., environment variables).
│   │   ├── models.py          # Data models (e.g., for chatbot sessions, API credentials).
│   │   ├── routes/
│   │   │   ├── __init__.py    # Initialize routes package.
│   │   │   ├── chatbot.py     # API endpoints for the chatbot interface.
│   │   │   └── dashboard.py   # API endpoints for managing AI model APIs.
│   ├── requirements.txt       # Python dependencies.
│   └── run.py                 # Entry point for the backend server.
├── frontend/
│   ├── public/
│   │   └── index.html         # HTML entry point.
│   ├── src/
│   │   ├── assets/
│   │   │   └── styles.css     # Global styles.
│   │   ├── components/
│   │   │   ├── ChatInterface.jsx  # Main chatbot UI component.
│   │   │   ├── Dashboard.jsx      # Component for the user dashboard.
│   │   │   └── Header.jsx         # Reusable header/navigation component.
│   │   ├── pages/
│   │   │   ├── Home.jsx       # Landing page with chatbot interface.
│   │   │   └── Settings.jsx   # Page for API configuration and user settings.
│   │   ├── App.jsx            # Main application component.
│   │   └── index.js           # Application entry point.
│   ├── package.json           # Node.js dependencies and scripts.
│   └── .env                   # Environment variables for the frontend.
├── tests/
│   ├── backend_tests/
│   │   └── test_chatbot.py    # Backend unit and integration tests.
│   └── frontend_tests/
│       └── test_dashboard.test.js  # Frontend tests (e.g., component rendering, interactions).
└── .gitignore                 # Git ignore file to exclude unnecessary files.



Achi re vai achi