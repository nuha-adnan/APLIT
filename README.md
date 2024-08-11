Lernprogramm

This project is a web-based learning application that allows users to engage with different subjects, answer questions, and track their progress. The application is built using HTML, CSS, and JavaScript and incorporates various technologies to enhance user experience, such as KaTeX for mathematical rendering and service workers for offline functionality.
Project Overview
File Structure

    index.html: The main HTML file that sets up the structure and layout of the web application.
    ./src/style.css: The CSS file that provides styling for the application.
    ./src/script.js: The JavaScript file that manages the application’s interactivity, including tab navigation, question handling, and progress tracking.
    ./src/icon.png: The favicon used for the application.
    ./manifest.json: A JSON file that defines the web app’s manifest, including its appearance and behavior when installed on a device.

Dependencies

    KaTeX: A library for rendering mathematical expressions in LaTeX format. This is used to display complex math questions.
    Service Worker: A script that enables offline capabilities and improves the loading performance by caching essential assets.

Features

    Tab Navigation: Users can switch between different subjects (Mathematik, Internettechnologien, Allgemeines Wissen, and Externaufgaben) using the tab buttons.
    Question Display: Each subject tab displays relevant questions along with multiple-choice options.
    Progress Tracking: A progress bar visualizes the user’s learning progress.
    Statistics: The application includes a statistics section to display the user's score and allows them to reset their progress.
    Offline Support: The application can be used offline, thanks to the service worker and manifest setup.

Getting Started

To run this project locally:

    Clone the repository.
    Open index.html in your preferred web browser.
    Navigate through the tabs, answer questions, and track your progress.

Future Enhancements

    Additional Subjects: Incorporate more subjects and questions to broaden the learning experience.
    User Authentication: Implement user login functionality to save progress across different sessions and devices.
    Enhanced UI/UX: Improve the design and user interaction for a more seamless experience.
    Data Persistence: Store user progress and statistics on a backend server or local storage.

License

This project is licensed under the MIT License. Contributions are welcome! Feel free to fork the repository and submit pull requests for improvements or new features.
