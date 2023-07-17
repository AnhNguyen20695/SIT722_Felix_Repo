var express = require('express');
var router = express.Router();
const terms = [
  {
    'id':'1',
    'name':'Microservice',
    'description':'An approach to software development, where functions of a system are split into multiple server to handle. Each server will handle a simple function of the system. This helps improve the scalability of the whole system.',
    'reference':'Ashley D. (2021).Bootstrapping Microservices with Docker, Kubernetes, and Terraform, 26, 1.5'
  },
  {
    'id':'2',
    'name':'DevOps',
    'description':'A career blended between development and operations. A DevOps is responsible for maintaining and monitoring the software development lifecycle. This also includes continuous monitoring of the infrastructure.',
    'reference':'Glenn M. (2022). Remove the Walls of Confusion: Rethink DevOps to Unlock its Full Value. Online website: https://www.linkedin.com/pulse/remove-walls-confusion-rethink-devops-unlock-its-full-glenn-mason/'
  },
  {
    'id':'3',
    'name':'Unit Learning Objective',
    'description':'The expected skills and abilities gained through the course completion. There are three key objectives in the module SIT722.',
    'reference':'Michael H. (2023). 1.1 Welcome to SIT722. Online website: https://d2l.deakin.edu.au/d2l/le/content/1317132/viewContent/6890532/View'
  },
  {
    'id':'4',
    'name':'3Cs',
    'description':'The characteristics required to study peacefully in SIT722 or any units. These are Curious, Constructive and Compassionate.',
    'reference':'Michael H. (2023). 1.1 Welcome to SIT722. Online website: https://d2l.deakin.edu.au/d2l/le/content/1317132/viewContent/6890532/View'
  },
  {
    'id':'5',
    'name':'SDLC',
    'description':'An abbreviation for Software Development Life Cycle. It is a process to develop softwares, starting from the initial designing phase to deployment, and repeat the steps from designing when the company wants to develop additional features for the software.',
    'reference':'Tutorials Point. Online website: https://www.tutorialspoint.com/sdlc/sdlc_overview.htm'
  },
  {
    'id':'6',
    'name':'express-generator',
    'description':'A framework in NodeJS to quickly setup a skeleton for an application. Run command "express -view ejs" to create the skeleton.',
    'reference':'ExpressJS. Getting Started. Online website: https://expressjs.com/en/starter/generator.html'
  },
  {
    'id':'7',
    'name':'monolith',
    'description':'Opposite to Microservice. While microservice splits functions to many servers to share the work, a monolith hosts all functions in the same server.',
    'reference':'Ashley D. (2021).Bootstrapping Microservices with Docker, Kubernetes, and Terraform, 28, 1.7'
  },
  {
    'id':'8',
    'name':'technology stack',
    'description':'A compilation of technologies to use to develop an application. Each person will have one or more technology stack that he is familiar with.',
    'reference':'Ashley D. (2021).Bootstrapping Microservices with Docker, Kubernetes, and Terraform, 33, 1.9'
  },
  {
    'id':'9',
    'name':'Git',
    'description':'A code hosting server. Developers can share their code, and there are also many features to support code versioning.',
    'reference':'Github Docs. Hello World. Online website: https://docs.github.com/en/get-started/quickstart/hello-world'
  },
  {
    'id':'10',
    'name':'Visual Studio Code',
    'description':'An Integrated Development Environment, or IDE, used for writing codes. The tool has a convenient terminal to write commands, such as to interact with Git, and linting to support syntax errors for multiple languages.',
    'reference':'Visual Studio Code Docs. Getting Started. Online website: https://code.visualstudio.com/docs'
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page_description: 'Welcome to my website showing a collection of DevOps terms and their brief descriptions.' ,
                        page_title: 'SIT722 DevOps Glossary',
                        terms: terms});
});

module.exports = router;
