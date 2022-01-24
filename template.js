module.exports.getReadMe = (userData, responses) => {
  function blank(response) {
    return response.length === 0 ? "None" : response;
  }

  return `# ${blank(responses.title)}
    ${blank(responses.description)}

    ### Contents
    1. [Installation Instructions](#installation-instructions)
    2. [Usage](#usage)
    3. [Contributors](#contributors)
    4. [Tests](#tests)
    5. [Questions](#questions)

    ## Installation Instructions
    ${blank(responses.installation)}

    ## Usage
    ${blank(responses.usage)}

    ## License
    ${responses.license}

    ## Contributors
    ${blank(responses.contributors)}

    ## Tests
    ${blank(responses.tests)}

    ## Questions
    Contatct: ${userData.login}
    Email: <${responses.email}>
    `;
};
