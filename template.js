module.exports.getReadMe = (data) => {
  

  return `# ${data.title}
    ${badge}
    ${data.description}

    ### Contents
    1. [Installation Instructions](#installation-instructions)
    2. [Usage](#usage)
    3. [Contributors](#contributors)
    4. [Tests](#tests)
    5. [Questions](#questions)

    ## Installation Instructions
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${data.license}

    ## Contributors
    ${data.contributors}

    ## Tests
    ${data.tests}

    ## Questions
    Contatct: ${userData.login}
    Email: <${data.email}>
    `;
};
