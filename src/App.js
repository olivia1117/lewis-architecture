import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}

      {isAuthenticated && (
        <>
          <p>Welcome, {user.name}</p>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </button>
        </>
      )}

      <h1>Lewis Architecture</h1>
      <p>
        This is a web client for providing instructions to students and faculty
        on the various components to learn and teach throughout a Lewis
        University computer science program.
      </p>

      <h2>More Information About Future Plans</h2>
      <p>Click the download link below to see the original Architecture Design:</p>
      <a
        href="/files/Architecture Design - Lewis Instructional Software Architecture.pdf"
        download
      >
        Lewis Architecture Design Document
      </a>

      <h2>How to Create a Static Web Application Using React, GitHub, and Microsoft Azure</h2>
      <p>Download the Word doc below to view the written tutorial:</p>
      <a
        href="/files/How to Create a Static Web Application Using React and Host It on GitHub and Microsoft Azure in a CI_CD Pipeline.docx"
        download
      >
        How to Create a Static Web Application Using React, GitHub, and Microsoft Azure in a CI/CD Pipeline
      </a>

      <h2>How to Add a Domain Name to a Cloud Provider Website</h2>
      <p>Download the Word doc below to view the written tutorial:</p>
      <a
        href="/files/How to add a domain name to a cloud provider website.docx"
        download
      >
        How to Add a Domain Name to a Cloud Provider Website
      </a>

      <h2>How to Add Third Party Authentication with Auth0</h2>
      <p>Download the Word doc below to view the written tutorial:</p>
      <a
        href="/files/How to add 3rd party authentication with Auth0.docx"
        download
      >
        How to Add Third Party Authentication with Auth0
      </a>


    </div>
  );
}
export default App;