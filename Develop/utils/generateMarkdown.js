//  Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// Create a function that returns the license link
// If there is no license, return an empty string
function generateMarkdown(userAnswers) {
  return `
  # ${userAnswers.name}


  ## Description
  ${userAnswers.decription}

  ## GitHub
  ${userAnswers.title}

  ## Installation 
  ${userAnswers.install}

  ## License
  ![license badge](https://img.shields.io/badge/license-${userAnswers.license}-orange)

  ## Tests
  ${userAnswers.tests}

  ## What To Know 
  ${userAnswers.usege}

  ## How To Contribut 
  ${userAnswers.contributing}

  `;
};



module.exports = generateMarkdown;
