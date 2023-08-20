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
  },
  {
    'id':'11',
    'name':'Agile',
    'description':'A set of software development frameworks on how developers work to deploy the products. Examples of a framwork that follows Agile methodology is Scrum.',
    'reference':'Microsoft article (2022). What is Agile?. Online website: https://learn.microsoft.com/en-us/devops/plan/what-is-agile'
  },
  {
    'id':'12',
    'name':'Service Level Agreement (SLA)',
    'description':'An agreement between the IT company that delivers the service and customer. The agreement is mainly on confirming the values and availability of the service, such as 99.99% uptime.',
    'reference':'Atlassian. SLAs: The what, the why, the how. Online website: https://www.atlassian.com/itsm/service-request-management/slas'
  },
  {
    'id':'13',
    'name':'continuous integration',
    'description':'This is the practice of continuously integrating new codes into the rest of the application code to be released. This process can be automated and creates a build artifact.',
    'reference':'Vadapali S. (2018). DevOps: Continuous Delivery, Integration, and Deployment with DevOps. Ch. 2.'
  },
  {
    'id':'14',
    'name':'continuous delivery',
    'description':'This is the next step of continuous integration. After automated tests have passed in the test environment, codes and new changes are deployed to the preproduction/staging environment for user acceptance and feedback. The final step to deploy to production is manually triggered based on business decisions.',
    'reference':'Vadapali S. (2018). DevOps: Continuous Delivery, Integration, and Deployment with DevOps. Ch. 2.'
  },
  {
    'id':'15',
    'name':'continuous deployment',
    'description':'Similar to continuous delivery. However, the last step to deploy to production environment is automated.',
    'reference':'Vadapali S. (2018). DevOps: Continuous Delivery, Integration, and Deployment with DevOps. Ch. 2.'
  },
  {
    'id':'16',
    'name':'test automation',
    'description':'Automatically running tests. This can be achieved by writing automation scripts and scheduling to run the those scripts.',
    'reference':'Vadapali S. (2018). DevOps: Continuous Delivery, Integration, and Deployment with DevOps. Ch. 2.'
  },
  {
    'id':'17',
    'name':'unit test',
    'description':'Tests conducted for each individual unit. A unit here can be a function, an API.',
    'reference':'Coupland M. (2021). DevOps Adoption Strategies: Principles, Processes, Tools, and Trends.'
  },
  {
    'id':'18',
    'name':'integration test',
    'description':'Different functions are tested altogether to ensure that they can work together. In this test, codes developed will be merged together and test.',
    'reference':'Coupland M. (2021). DevOps Adoption Strategies: Principles, Processes, Tools, and Trends.'
  },
  {
    'id':'19',
    'name':'acceptance test',
    'description':'This is similar to integration test. However, this mainly focuses on whether the integrated system satisfies the business.',
    'reference':'Coupland M. (2021). DevOps Adoption Strategies: Principles, Processes, Tools, and Trends.'
  },
  {
    'id':'20',
    'name':'user interface test',
    'description':'Tests conducted from a user perspective. For a web server, this can be tests done on the UI, how the web looks and so on.',
    'reference':'Coupland M. (2021). DevOps Adoption Strategies: Principles, Processes, Tools, and Trends.'
  },
  {
    'id':'21',
    'name':'Docker',
    'description':'Docker has a range of products that can be considered a Platform as a Service. It offers services to help developers quickly build, share and run applications anywhere.',
    'reference':'Docker website. URL: https://www.docker.com/'
  },
  {
    'id':'22',
    'name':'container',
    'description':'Most widely known as Docker container. Applications code and environment settings are packaged into container images, and when run become containers.',
    'reference':'Docker website. URL: https://www.docker.com/resources/what-container/#:~:text=A%20Docker%20container%20image%20is,tools%2C%20system%20libraries%20and%20settings.'
  },
  {
    'id':'23',
    'name':'image',
    'description':'In the case of Docker, similar to how pictures are taken, applications code, environment settings, libraries, tools, dependencies are snapshot into an image. Then this image will be run in a container. The advantage of image is that it allows any environment to run it.',
    'reference':'Alexander S. (2021). Docker Image. URL: https://www.techtarget.com/searchitoperations/definition/Docker-image#:~:text=A%20Docker%20image%20is%20a,virtual%20machine%20(VM)%20environments.'
  },
  {
    'id':'24',
    'name':'YAML',
    'description':"A kind of iterative acronym of YAML Ain't Markup Language. Similar to Json, YAML is a data serialization language, with key-value pairs. YAML is mainly used for specifying configuration settings.",
    'reference':'YAML website. URL: https://yaml.org/'
  },
  {
    'id':'25',
    'name':'JSON',
    'description':'Similar to YAML, JSON is a also a data serialization language to store and transmit data objects. It has key-value pairs.',
    'reference':'JSon website. URL: https://www.json.org/json-en.html'
  },
  {
    'id':'26',
    'name':'build',
    'description':"In Docker's case, this action is to create Docker image. We can build a new image from scratch by including the 'FROM scratch' in the Dockerfile, or create a new image based on another base image by specifying the image name in the 'FROM' line in the Dockerfile.",
    'reference':'Docker website. URL: https://docs.docker.com/build/building/base-images/'
  },
  {
    'id':'27',
    'name':'terminal',
    'description':"An interface that allows developers to interact with the underlying computer system. There are different kinds of commands to run depending on which operating system is running.",
    'reference':'VSCode website. URL: https://code.visualstudio.com/docs/terminal/basics'
  },
  {
    'id':'28',
    'name':'scale',
    'description':"In software development, this is the infrastructure's ability to adapt to increasing traffic. In DevOps or chapter 4 of our course, this might mean our ability to handle multiple containers as more microservices are introduced to our application.",
    'reference':'Ashley D. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform. Chapter 4.'
  },
  {
    'id':'29',
    'name':'scope',
    'description':"In chapter 4 of our book, this means the limit to which Docker Compose will manage. If a container is within Docker Compose's scope, then executing up or down commands will run that container",
    'reference':'Ashley D. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform. Chapter 4.'
  },
  {
    'id':'30',
    'name':'virtual machine',
    'description':'A virtualized environment that simulates running another machine in your computer. It uses up part of the CPU, GPU resources on our physical computer to run, and runs on its own operating system. We can have a Linux VM running on a Windows computer.',
    'reference':'VMWare website. URL: https://www.vmware.com/au/topics/glossary/content/virtual-machine.html#:~:text=A%20Virtual%20Machine%20(VM)%20is,a%20physical%20%E2%80%9Chost%E2%80%9D%20machine.'
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page_description: 'Welcome to my website showing a collection of DevOps terms and their brief descriptions.' ,
                        page_title: 'SIT722 DevOps Glossary',
                        terms: terms});
});

module.exports = router;
