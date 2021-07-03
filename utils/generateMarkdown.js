// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = {
    "Apache" : "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    "MIT" : "https://img.shields.io/badge/License-MIT-yellow.svg",
    "GNU" : "https://img.shields.io/badge/License-GPLv3-blue.svg",
    "Mozilla" : "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
  }
  if (lisense in badge) {
    return [?]
  } 
    else 
      return null; 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return {}
    "Apache" : "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    "MIT" : "https://img.shields.io/badge/License-MIT-yellow.svg",
    "GNU" : "https://img.shields.io/badge/License-GPLv3-blue.svg",
    "Mozilla" : "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
} [license]

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "unlicense") {
    return "Respository found under [?]."
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
;
}

module.exports = generateMarkdown;

## Description
 ${answers.description}
 <br>
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
 ${answers.installation}
## Usage
 ${answers.usage}
## License
${answers.license}
<br/>
This application is covered by the ${answers.license} license. 
## Contributing
 ${answers.contributing}
## Tests
 ${answers.tests}
## Questions
 ${answers.questions}<br />
<br/>
<br />
 Email me with any questions: ${answers.email}<br/><br/>
    ` 