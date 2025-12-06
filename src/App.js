import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="container">
      {/* HEADER SECTION */}
      <header className="header">
        <h1>Lewis Architecture</h1>

        <div className="auth-controls">
          {!isAuthenticated ? (
            <button className="btn" onClick={() => loginWithRedirect()}>
              Login
            </button>
          ) : (
            <>
              <p className="welcome">Welcome, {user.name}</p>
              <button
                className="btn logout"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </button>
            </>
          )}
        </div>

        <p className="intro">
          This site provides instructions, tutorials, and resources for Lewis
          University students and faculty learning software architecture
          concepts through a modular and extensible curriculum.
        </p>
      </header>

      {/* SECTIONS - EASY TO ADD TO */}
      <section className="section">
        <h2>Architecture Design Overview</h2>
        <p>Download the original Architecture Design document:</p>
        <a
          className="download-link"
          href="/files/Architecture Design - Lewis Instructional Software Architecture.pdf"
          download
        >
          Lewis Architecture Design Document
        </a>
      </section>

      <section className="section">
        <h2>Level 0 — Start with the Base Code in React</h2>
        <h4>Skills Acquired:</h4>
        <ul>
            <li>Understand what is going on in the baseline code</li>
            <li>Become more familiar with HTML, CSS, and JS</li>
            <li>See some of the basics of React and learn what makes it different than developing with just HTML, CSS, and JS</li>
            <li>Able to clone and work with code locally from the repo in an IDE</li>
        </ul>

        <h4>Resources</h4>
        <ul>
            <li>Reference to original code from react.dev: <a href="https://react.dev/learn/tutorial-tic-tac-toe">https://react.dev/learn/tutorial-tic-tac-toe</a></li>
            <li>Link to GitHub repo with baseline code: <a href="https://github.com/olivia1117/lewis-tac-toe-base">https://github.com/olivia1117/lewis-tac-toe-base</a></li>
        </ul>

        <h4>Additional References</h4>
        <p>Quick Note: Make sure you brush up on basic HTML, CSS, and JS as well as what HTTP is. You can find resources for this also 
            at the first link below on W3Schools.</p>
        <ul>
            <li>W3Schools What is React? - <a href="https://www.w3schools.com/whatis/whatis_react.asp">https://www.w3schools.com/whatis/whatis_react.asp</a></li>
            <li>React Official Documentation - <a href="https://react.dev/">https://react.dev/</a></li>
            <li>React Tutorial for Beginners - <a href="https://www.freecodecamp.org/news/react-beginner-handbook/">https://www.freecodecamp.org/news/react-beginner-handbook/</a></li> 
        </ul>

	
        <p>Download the written tutorial:</p>
        <a
          className="download-link"
          href="/files/How to start with base tic-tac-toe React code to make new changes.docx"
          download
        >
          How to Start with the Base Code in React and Learn GitHub and Basic Web Development
        </a>
      </section>

      <section className="section">
        <h2>Level 1 — Lewis-Tac-Toe with React + GitHub + Azure</h2>
        <h4>Skills Acquired:</h4>
        <ul>
            <li>Build off previous code to add more features</li>
            <li>Learn how to make a CI/CD development pipeline for putting an application online with Azure</li>
            <li>Continue to learn more about GitHub and how to use it as part of the CI/CD pipeline with GitHub Actions</li>
        </ul>

        <h4>Resources</h4>
        <ul>
            <li>Use your previous code from step 0 for the baseline</li>
            <li>Link to GitHub repo with sample implementation for this step: <a href="https://github.com/olivia1117/lewis-tac-toe">https://github.com/olivia1117/lewis-tac-toe</a></li>
        </ul>

        <h4>Additional References</h4>
        <p>Quick Note: Here are a few other links to better understand Azure, what CI/CD is and how it works, 
            and a few other topics</p>
        <ul>
            <li>YouTube video about different DevOps softwares - <a href="https://www.youtube.com/watch?v=EY1hsh-HCjo">https://www.youtube.com/watch?v=EY1hsh-HCjo</a></li>
            <li>YouTube video overview of React concepts - <a href="https://youtu.be/wIyHSOugGGw?si=tChZZA4aAk_p-cnQ">https://youtu.be/wIyHSOugGGw?si=tChZZA4aAk_p-cnQ</a></li>
            <li>Quick YouTube vide overview of DevOps and CI/CD - <a href="https://www.youtube.com/watch?v=scEDHsr3APg">https://www.youtube.com/watch?v=scEDHsr3APg</a></li> 
        </ul>


        <p>Download the written tutorial:</p>
        <a
          className="download-link"
          href="/files/How to set up a react application online with GitHub and Azure CICD pipeline.docx"
          download
        >
          How to Create a Static Web Application Using React, GitHub, and Azure
        </a>
      </section>

      <section className="section">
        <h2>Level 2 - Lewis-Tac-Toe with Custom Domain and Authentication </h2>
        <p>Download the written tutorial:</p>
        <a
          className="download-link"
          href="/files/How to add a domain name to a cloud provider website.docx"
          download
        >
          How to Add a Domain Name to a Cloud Provider Website
        </a>
      </section>

      <section className="section">
        <h2>Level 3 - Lewis-Tac-Toe with Node.js Server and MongoDB Atlas</h2>
        <p>Download the written tutorial:</p>
        <a
          className="download-link"
          href="/files/How to add 3rd party authentication with Auth0.docx"
          download
        >
          How to Add Third Party Authentication with Auth0
        </a>
      </section>

      <section className="section">
        <h2>Level 4 - Lewis-Tac-Toe with Server-Side File Storage and Sharing</h2>
        <p>Download the written tutorial:</p>
      </section>

    </div>
  );
}

export default App;
