# Shashwat Shyam Tare - Portfolio Website

This repository contains the source code for my personal portfolio website, built with React and styled-components. The design is a modern, single-page layout inspired by [Brittany Chiang's portfolio](https://brittanychiang.com/).

## Tech Stack

*   **Frontend:** [React](https://reactjs.org/)
*   **Styling:** [styled-components](https://styled-components.com/)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
*   **Tooling:** [Create React App](https://create-react-app.dev/)

## Project Structure

The project is a single-page application built with a clean, component-based architecture.

```
src/
├── components/
│   ├── About.js
│   ├── Experience.js
│   ├── Hero.js
│   ├── Navbar.js
│   └── Projects.js
│
├── App.js              # Main component that assembles all sections
├── App.css             # Minimal base CSS
├── GlobalStyle.js      # Global CSS-in-JS styles
└── theme.js            # Color palette and font styles for theming
```

-   **`src/components/`**: This directory holds all the individual sections of the portfolio, such as `Hero`, `About`, `Experience`, and `Projects`. Each component is self-contained.
-   **`src/App.js`**: This is the root component that structures the page by importing and arranging the components from the `components` directory.
-   **`src/theme.js` & `src/GlobalStyle.js`**: These files work together to provide a consistent theme (colors, fonts) across the entire application using `styled-components`.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

You need to have Node.js (which includes npm) installed on your machine.

### Initial Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  **Navigate into the project directory:**
    ```sh
    cd Portfolio
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run the following command:

```sh
npm start
```

This will open the portfolio website in your default browser, typically at `http://localhost:3000`. The page will automatically reload if you make any edits to the source files.