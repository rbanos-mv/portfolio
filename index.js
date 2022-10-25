class Projects {
  setup = () => {
    this.listElement = document.querySelector('#projects');
    this.mount = document.querySelector('#popup');
    this.mount.style.display = 'none'; // hide popup
    this.showProjectsList();
  };

  showProjectsList = () => {
    const projectsList = this.projectsList();
    projectsList.forEach((project, index) => {
      this.showProject({...project, index});
    });
  }

  showProject = (project) => {
    const elementHtml = `
      <section>
        <a href="#" onclick="projects.openPopup(${project.index})" class="image fit side"
          ><img src="${project.images[0]}" alt="" data-position="center center"
        /></a>
        <div class="content">
          <div class="inner">
            <h2>${project.title}</h2>
            <p>${project.description[0]}</p>
            <ul class="actions">
              <li><a href="#" onclick="projects.openPopup(${project.index})" class="button">Learn more</a></li>
            </ul>
          </div>
        </div>
      </section>`;

    this.listElement.insertAdjacentHTML('beforeend', elementHtml);
  }

  projectsList = () => {
    return [
      // {
      //   title: 'IATS Admissions and Records',
      //   date: '2021-2022',
      //   description:[
      //     "This application was developed for the Admissions and Records Office of the Inter-American Adventist Theological Seminary.",
      //     "Main features: Program requirements, Course Catalog, Term Master, Student Master, Admissions process, Registration process, Grades process"
      //   ],
      //   images: ['images/Student.png'],
      //   technologies: ['Java', 'Spring', 'Angular', 'Typescript', 'MySQL', 'Maven'],
      //   liveVersion: '',
      //   source: '',
      // },
      // {
      //   title: 'CAFE - Control de Activo Fijo para Empresas',
      //   date: '2018-2020',
      //   description:[
      //     "This application was developed for Praisa, Monterrey, México. ",
      //     "Main features: Fixed Assets inventory, Tax Deduction calculation process, Accounting Depreciation and Revaluation calculation processes."
      //   ],
      //   images: ['images/Student.png'],
      //   technologies: ['Javascript', 'Nodejs', 'Angular', 'Typescript', 'MongoDB'],
      //   liveVersion: '',
      //   source: '',
      // },
      {
        title: 'Rent-A-Green',
        date: 'October, 2022',
        description:[
          "<strong>Rent-A-Green</strong> is an application that allow users to book appointments for renting an electric car. The homepage is a showcase of the available cars. Users have the following options: signup, login, view the details of a selected car and book an appointment. Logged users can also add new car, or delete an existing one. The front-end was developed with ReactJS and Redux. The back-end API was developed with Ruby on Rails.",
          "I teamed with <a href=\"https://github.com/acolombo1\" target=\"_blank\">Aldo Aníbal Colombo</a> and <a href=\"https://github.com/alexpuente0\" target=\"_blank\">Alejandro Puente</a> to develop this application. We used a Kanban board to track the progress of the project. Each of us took a similar workload. This was our final capstone project to receive the <a href=\"https://www.credential.net/fd9ad20c-809d-4fe9-977b-d150c8c6d5d9\" target=\"_blank\">Microverse's Full-Stack Web Developer Certificate</a>.",
        ],
        images: ['images/RentAGreen.png'],
        technologies: ['Ruby on Rails', 'PostgreSQL', 'devise', 'jwt', 'cancancan', 'ActiveStore', 'SOFT-DELETES', 'rubocop', 'rspec', 'rswag', 'JavaScript-ES6', 'CSS3', 'ReactJS', 'Redux', 'jest'],
        liveVersion: '',
        source: 'https://github.com/rbanos-mv/rent-a-green-front',
      },
      {
        title: 'XpenseS',
        date: 'October, 2022',
        description:[
          "<strong>XpenseS</strong> is a mobile web application where you can manage your budget. The users can create categories to group their expenses. This way they can see how much money they spent in each of the categories. The front-end and back-end where developed as a single Ruby on Rails application.",
          "I developed this application as the capstone project to receive the <a href=\"https://www.credential.net/a529cdb0-a5c1-49ca-a948-7c4604dd488f\" target=\"_blank\">Microverse's Ruby-on-Rails Certificate</a>."
        ],
        images: ['images/XpenseS.png'],
        technologies: ['Ruby on Rails', 'PostgreSQL', 'devise', 'cancancan', 'rubocop', 'rspec', 'capybara', 'bullet'],
        liveVersion: 'https://glacial-thicket-62528.herokuapp.com/',
        source: 'https://github.com/rbanos-mv/capstone-5-expenses',
      },
      {
        title: 'Recipe App',
        date: 'Sep, 2022',
        description:[
          "The <strong>Recipe app</strong> keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.",
          "I teamed with <a href=\"https://github.com/rega1237\" target=\"_blank\">Rafael E. Guzman Arias</a> to developed this application as a requirement to receive the <a href=\"https://www.credential.net/a529cdb0-a5c1-49ca-a948-7c4604dd488f\" target=\"_blank\">Microverse's Ruby-on-Rails Certificate</a>."
        ],
        images: ['images/RecipeApp.png'],
        technologies: ['Ruby on Rails', 'PostgreSQL', 'devise', 'jwt', 'cancancan'],
        liveVersion: '',
        source: 'https://github.com/rbanos-mv/rails-recipe-app',
      },
      {
        title: 'Latin America Population',
        date: 'xxxx, 2022',
        description:[
          "<strong>Latin America Population</strong> is a single page application created with React and Redux that allow users to review the population of Latin America countries. This webapp uses the World Bank indicators API.",
          "I developed this application as the capstone project to receive the <a href=\"https://www.credential.net/deedcc82-1863-421e-a302-e97f49f5662d\" target=\"_blank\">Microverse's React/Redux Certificate</a>."
        ],
        images: ['images/Population.png'],
        technologies: ['JavaScript-ES6', 'CSS3', 'ReactJS', 'Redux', 'TESTING?'],
        liveVersion: 'https://rbanos-mv.github.io/capstone-3-metrics/',
        source: 'https://github.com/rbanos-mv/capstone-3-metrics',
      },
      {
        title: 'Meal Time',
        date: 'xxxx, 2022',
        description:[
          'The <strong>Meal Time</strong> website is an HTML/Javascript project that uses two external APIs. We selected the <a href="https://www.themealdb.com/api.php">Free Meal API</a> by <a href="https://www.themealdb.com/">TheMealDB</a> which provides data for meals to build the web app around it. We also used the <a href="https://www.notion.so/microverse/Involvement-API-869e60b5ad104603aa6db59e08150270">Involvement API</a> by <a href="https://www.microverse.org/">Microverse</a> to record <em>likes</em> and <em>comments</em>.',
          "I developed this application together with <a href=\"https://github.com/aimalamiri\" target=\"_blank\">Aimal Amiri</a> as the capstone project to receive the <a href=\"https://www.credential.net/18e91d6a-98c7-4440-84e0-b6cd5c921765\" target=\"_blank\">Microverse's Javascript Certificate</a>."
        ],
        images: ['images/MealTime.png'],
        technologies: ['HTML 5', 'SCSS 3', 'Javascript ES6', 'Webpack', 'Jest'],
        liveVersion: 'https://aimalamiri.github.io/JavaScript-Group-Capstone-Project/',
        source: 'https://github.com/rbanos-mv/capstone-2-mealtime',
      }
    ]
  }

  get = (index) => {
    return this.projectsList()[index];
  }

  disableScrolling = () => {
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
  }

  enableScrolling = () => {
      window.onscroll=function(){};
  }

  openPopup = (index) => {
    this.disableScrolling();
    const popupHTML = this.popup(this.get(index))
    this.mount.insertAdjacentHTML('beforeend', popupHTML);
    this.mount.style.display = 'block';
  }

  popup = (project) => {
    let description = '';
    project.description.forEach((line) => {
      description += `<p>${line}</p>`
    })

    return `
      <div id="wrapper" class="popup">
          <section id="main" class="wrapper">
            <div class="inner">
              <div class="popup-close">
                <img src="images/icon-cancel.svg" alt="Close button" onclick="projects.closePopup()">
              </div>
              <h1 class="major">${project.title}</h1>
              <span class="image fit"><img src="${project.images[0]}" alt="" /></span>
              <span class="center">${this.showTech(project.technologies)}</span>
              <p>${description}</p>
              ${this.showActions(project)}
            </div>
          </section>
      </div>`;
  }

  showTech(technologies) {
    let result = '<ul class="actions small row-center">';
    technologies.forEach((tech) => {
      result += `&nbsp;<li class="button primary small">&nbsp;${tech}&nbsp;&nbsp;&nbsp;</li>&nbsp;`;
    })
    return result +'</ul>';
  }

  showActions(project) {
    if (!project.liveVersion && !project.source) {
      return ''
    }

    let result = '<ul class="actions">';
    if (project.liveVersion) {
      result += `<li><a href="${project.liveVersion}" target="_blank" class="button">See Live</a></li>`;
    }
    if (project.source) {
      result += `<li><a href="${project.source}" target="_blank" class="button">See Source</a></li>`;
    }
    return result +'</ul>';
  }

  closePopup = () => {
    this.enableScrolling();
    this.mount.style.display = 'none';
    this.mount.removeChild(this.mount.firstChild);
  }
}

var projects;
window.onload = () => {
  projects = new Projects();
  projects.setup();
};
