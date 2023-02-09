// function that will create the manager item into the html

const { GitHubActionsReporter } = require("@jest/reporters")

const managerItem = (name, id, email, office) => {

return`<section class="card">
    <div class="manager">
        <h2 class="">${name}</h2>
        <h3 class="id">ID: ${id} </h3>
        <h4 class="email">Email: <a href="mailto:${email}">${email}</a></h4>
        <h5 class="office">Office Number: ${office}</h5>
    </div>
</section>`
};

// function that will create the engineer item to the html

const engineerItem = (name, id, email, github) => {
    
return` <section class="card">
    <div class="engineer">
        <h2 class="">${name}</h2>
        <h3 class="id">ID: ${id} </h3>
        <h4 class="email">Email: <a href="mailto:${email}">${email}</a></h4>
        <h5 class="github">GitHub @ <a href="https://github.com/${github}">${github}</a></h5> 
    </div>
</section> `
};

// function that will create the intern item to the html 

const internItem = (name, id, email, school) => {
    
    return` <section class="card">
        <div class="engineer">
            <h2 class="">${name}</h2>
            <h3 class="id">ID: ${id} </h3>
            <h4 class="email">Email: <a href="mailto:${email}">${email}</a></h4>
            <h5 class="office">School Attended: ${school}</h5> 
        </div>
    </section> `
    };

// function that will create the items if the user selected the 

function createItems (Team) {
    let items = [];
  
    Team.forEach(member => {
      if (member.getRole() === 'Manager') {
        items.push(managerItem(member.name, member.id, member.email, member.office))
      } if (member.getRole() === 'Engineer') {
        items.push(engineerItem(member.name, member.id, member.email, member.github))
      } if (member.getRole() === 'Intern') {
        items.push(internItem(member.name, member.id, member.email, member.school))
      }
    });
  
    return items.join('');
  }




// function that will generate my HTML with my team in place 

const HTML = (Team) => {

    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <header class="header">My Team</header>
    <body>
    
    <div class ="container">
        ${createItems(Team)}
    </div>
    
    </body>
    </html>`
}

module.exports = HTML