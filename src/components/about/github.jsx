import React from 'react';

const GitHubProfile = () => {
  return (
    <div className="github-profile-container">

      <ul className="mt-6 space-y-2">
        <li>📄 Know about my experiences: <a href="https://github.com/argel6767/resume/blob/main/Argel_Hernandez_Amaya_Resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</a></li>
      </ul>

      <div className="mt-8">
        <h3>Languages and Tools:</h3>
        <div className="flex flex-wrap gap-4 mt-2">
            <a href="https://www.java.com" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/>
          </a>
          <a href="https://spring.io/" target="_blank" rel="noreferrer">
            <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/>
          </a>
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
          </a>
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/>
          </a>
          <a href="https://nodejs.org/en">
          <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" width={40} alt="NodeJS" />
          </a>
          <a href="https://www.python.org" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/>
          </a>
          <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/>
          </a>
          <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/>
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
          </a>
          <a href="https://postman.com" target="_blank" rel="noreferrer">
            <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/>
          </a>
        </div>
      </div>

      <div className="mt-8 text-center">
        <img 
          className="mx-auto"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=argel6767&show_icons=true&locale=en&layout=compact" 
          alt="argel6767 most used languages" 
        />
      </div>

      <div className="mt-4 text-center text-xs text-gray-500">
        ⚡️ by <a target="_blank" href="https://git.io/readme-stats" rel="noopener noreferrer">git.io/readme-stats</a>
      </div>
    </div>
  );
};

export default GitHubProfile;