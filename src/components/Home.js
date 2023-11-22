import React from 'react'
import '../home.css';
import Navbar from './Navbar';
 

export default function Home() {
  return (
    <>
    <Navbar/>
 
  {/*hero1*/}
  <div className="container">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5 mb-5 mt-1">
      <div className="col-10 col-sm-8 col-lg-6">
        <img
          src={require('../images/hero.png')}
          className="d-block mx-lg-auto img-fluid rounded-5"
          alt="Bootstrap Themes"
          width={600}
          height={500}
          loading="lazy"
        />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
          What is Lancers?
        </h1>
        <p className="lead">
          A web-based project management system for freelancers to efficiently
          manage projects, tasks, clients, and finances with features like time
          tracking, invoicing, and collaboration tools.
        </p>
      </div>
    </div>
  </div>
  {/*Features*/}
  <div className="container px-4 pt-5" id="featured-3">
    <h2 className="pb-2 border-bottom">Lancers Features</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3 rounded-3">
          <img
          src={require("../images/p1.png")}
            width="250px"
            height="150px"
            className="rounded-3"
            alt="ml"
          />
        </div>
        <h3 className="fs-2 text-body-emphasis">Project Management</h3>
        <p>
          {" "}
          Planning, executing, and overseeing tasks to achieve specific goals
          within a defined timeframe and budget.
        </p>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3 rounded-3">
          <img
          src={require("../images/client.jpg")}
            width="250px"
            height="150px"
            className="rounded-3"
            alt="algo"
          />
        </div>
        <h3 className="fs-2 text-body-emphasis">Client Management</h3>
        <p>Maintain a database of client information and project history. </p>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3 rounded-3">
          <img
          src={require("../images/p2.jpg")}
            width="250px"
            height="150px"
            className="rounded-3"
            alt="ml"
          />
        </div>
        <h3 className="fs-2 text-body-emphasis">Collaboration </h3>
        <p>
          {" "}
          Communicate with clients and team members through chat or messaging
          features.
        </p>
      </div>
    </div>
  </div>
  {/* Carousel */}
  <div className="container my-1" style={{ maxWidth: '1000px' }}>
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
          src={require("../images/main.jpg")}
            className="d-block w-100"
            height="550px"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
          src={require("../images/c1.jpg")}
            className="d-block w-100"
            height="550px"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
          src={require("../images/c4.jpg")}
            className="d-block w-100"
            height="550px"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  {/*Jumbotron*/}
  <div className="p-5  bg-body-tertiary">
    <div className="container py-5 my-5">
      <h1 className="text-body-emphasis mb-3 text-center pb-5">
        How do we manage projects using ProJecT lancerS
      </h1>
      <div className="stepper d-flex flex-column mt-5 ml-2">
        <div className="d-flex mb-1">
          <div className="d-flex flex-column pr-4 align-items-center">
            <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">
              1
            </div>
            <div className="line h-100" />
          </div>
          <div className="tgap">
            <h5 className="text-dark">Create a Project</h5>
            <p className="lead text-muted pb-3" />
            <ul>
              <li>Log in to the web app.</li>
              <li>Find the "Create Project" or "New Project" button.</li>
              <li>
                Fill in project details, including the project name,
                description, and client information.
              </li>
              <li>Set a start date and deadline.</li>
              <li>Save the project to create it.</li>
            </ul>
            <p />
          </div>
        </div>
        <div className="d-flex mb-1">
          <div className="d-flex flex-column pr-4 align-items-center">
            <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">
              2
            </div>
            <div className="line h-100" />
          </div>
          <div className="tgap">
            <h5 className="text-dark">Task Management</h5>
            <p className="lead text-muted pb-3" />
            <ul>
              <li>Within the project, navigate to the "Tasks" section.</li>
              <li>
                Click on "Add Task" to create individual tasks related to the
                project.
              </li>
              <li>Assign tasks to team members or assign them to yourself.</li>
              <li>Set priorities and deadlines for each task.</li>
              <li>As you progress, mark tasks as completed.</li>
            </ul>
            <p />
          </div>
        </div>
        <div className="d-flex mb-1">
          <div className="d-flex flex-column pr-4 align-items-center">
            <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">
              3
            </div>
            <div className="line h-100" />
          </div>
          <div className="tgap">
            <h5 className="text-dark">Client Communication</h5>
            <p className="lead text-muted pb-3" />
            <ul>
              <li>
                Use the built-in chat or messaging features to communicate with
                clients or team members.
              </li>
              <li>
                Share project updates, ask questions, and clarify requirements.
              </li>
              <li>
                Keep all communication related to the project within the app.
              </li>
            </ul>
            <p />
          </div>
        </div>
        <div className="d-flex mb-1">
          <div className="d-flex flex-column pr-4 align-items-center">
            <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">
              4
            </div>
            <div className="line h-100" />
          </div>
          <div className="tgap">
            <h5 className="text-dark">Progress Tracking</h5>
            <p className="lead text-muted pb-3" />
            <ul>
              <li>
                Monitor project progress by checking task completion status,
                time tracking data, and deadlines.
              </li>
              <li>
                Generate reports or view project analytics to assess
                performance.
              </li>
              <li>
                Use the calendar or scheduling features to manage project
                milestones and meetings.
              </li>
            </ul>
            <p />
          </div>
        </div>
        <div className="d-flex mb-1">
          <div className="d-flex flex-column pr-4 align-items-center">
            <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">
              5
            </div>
            <div className="line h-100 d-none" />
          </div>
          <div className="tgap">
            <h5 className="text-dark">Finsh Project</h5>
            <p className="lead text-muted pb-3" />
            <ul>
              <li>
                Our application only makes it easier for you to complete your
                work.
              </li>
              <li>Finishing your work is your responsibility.</li>
            </ul>
            <p />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*footer*/}
  <footer className="py-3 mt-4  backgrad">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item">
        <a href="www.google.com" className="nav-link px-2 text-body-secondary">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="./features.html" className="nav-link px-2 text-body-secondary">
          Features
        </a>
      </li>
      <li className="nav-item">
        <a href="./article.html" className="nav-link px-2 text-body-secondary">
          Article
        </a>
      </li>
      <li className="nav-item">
        <a href="./faqs.html" className="nav-link px-2 text-body-secondary">
          FAQs
        </a>
      </li>
      <li className="nav-item">
        <a href="./about.html" className="nav-link px-2 text-body-secondary">
          About Us
        </a>
      </li>
    </ul>
    <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
  </footer>
</>

  )
}
