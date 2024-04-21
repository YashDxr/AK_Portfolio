import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCards from "./ExperienceCards";
import Particle from "../Particle";
import comakeit from "../../Assets/Experience/Comakeit.jpeg";
import juza from "../../Assets/Experience/Juza.jpeg";
import tcs from "../../Assets/Experience/Tcs.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCards
              imgPath={juza}
              company="Juza Cloud"
              title="Software Developer"
              timeline="Dec'2022 - Present"
              description="&rarr;&nbsp;Involved in the analysis, design, and development phases of the SDLC utilizing Agile (SCRUM) development methodology to deliver regular updates to the business team and project managers.<br/>
              &rarr;&nbsp;Created Microservices to enhance the payment posting process, leveraging Golang, Node.js and the Express framework. Integrated Spring Boot Data JPA to store messages in Apache Kafka Topics to Cassandra DB and employed Spark jobs for data processing and posting transactions to Apache Kafka TXN topic.<br/>
              &rarr;&nbsp;Developed and maintained WinAPI applications to meet project requirements, ensuring compatibility and adherence to Windows platform standards.<br/>
              &rarr;&nbsp;Designed and implemented various Oracle database queries, including both simple and complex queries,
              PL/SQL procedures, stored procedures, triggers, and functions.<br/>
              &rarr;&nbsp;Implemented Executor Service multi-threading to establish a Thread pool for parallel processing, enabling asynchronous execution of processes using future calls to access data.<br/>
              &rarr;&nbsp;Developed applications using Java 1.8 with new features like annotations, Generics, enhanced for loops, and Enums.<br/>
              &rarr;&nbsp;Employed design patterns such as MVC, Singleton, Business Delegate, Factory, and Service Locator.<br/>
              &rarr;&nbsp;Designed and developed RESTful web services using Spring MVC REST framework and JAX-RS.<br/>
              &rarr;&nbsp;Utilized Spring MVC Rest Controllers and Services with Dependency Injection, Spring JMS, and Spring Security. Implemented Spring Framework AOP Module for logging application status.<br/>
              &rarr;&nbsp;Employed Spring annotations for Dependency Injection, Auto-wiring, and Spring MVC for REST APIs and Spring Boot for Microservices.<br/>
              &rarr;&nbsp;Implemented Microservice architecture with Spring Boot-based services interacting through REST.<br/>
              &rarr;&nbsp;Utilized micro-frameworks to implement REST APIs with Golang and MongoDB (NO SQL) as the backend database.<br/>
              &rarr;&nbsp;Incorporated Python and Django within a Java development role to enhance cross-functional collaboration.<br/>
              &rarr;&nbsp;Collaborated with the frontend team, gaining familiarity with Redux, Typescript, RTK Query, PHP, and React to ensure consistent user experiences.<br/>
              &rarr;&nbsp;Demonstrated proficiency in C++ through active participation in online coding competitions, contributions to open-source projects on platforms like GitHub, and utilization of IBM RPG (Report Program Generator) for legacy system maintenance and enhancement.<br/>
              &rarr;&nbsp;Developed Perl scripts for automating data processing and analysis tasks.<br/>
              &rarr;&nbsp;Gained hands-on experience with C# and ASP .NET Core by developing a personal web application that followed MVC architecture and integrated with a SQL Server database.<br/>
              &rarr;&nbsp;Extensively utilized Linux environments during development and troubleshooting phases, showcasing expertise in Linux systems.<br/>
              &rarr;&nbsp;Applied DevOps principles by integrating automated unit tests and deploying applications to AWS Lambda using CI/CD pipelines.<br/>
              &rarr;&nbsp;Utilized Microsoft Azure services, including Azure DevOps for version control, continuous integration, and deployment processes, further enhancing cloud-based development skills.<br/>
              &rarr;&nbsp;Acquired expertise in Docker-based projects, encompassing the creation of Docker images, container management, and containerized application deployment.<br/>
              &rarr;&nbsp;Leveraged AWS services such as EC2, S3, and Lambda for deployment, aligning with the required AWS experience.<br/>
              &rarr;&nbsp;Managed project workflows through JIRA, GitHub, and CircleCI, demonstrating strong collaboration skills and experience with version control platforms.<br/>
              &rarr;&nbsp;Integrated Docker within the development process, deepening understanding of containerization and orchestration.<br/>
              &rarr;&nbsp;Generated JSON data and stored it as documents, including data types and conversions, in MongoDB.<br/>
              &rarr;&nbsp;Developed SQL queries, stored procedures, triggers, views, and improved performance with explain plans.<br/>
              &rarr;&nbsp;Designed APIs for AWS Lambda to manage servers and execute code in AWS.<br/>
              &rarr;&nbsp;Employed AWS CloudWatch for alerting, maintenance, and monitoring of production and corporate servers/storage.<br/>
              &rarr;&nbsp;Possessed familiarity with Selenium Web Driver, Selenium commands, and X-path. Developed grunt tasks for running unit tests on Jenkins and used JIRA for issue assignment, tracking, reporting, and auditing in the application.<br/>
              &rarr;&nbsp;Gained practical knowledge of testing tools such as Junit and Mockito, contributing to code quality in a collaborative development environment.<br/>
              &rarr;&nbsp;Utilized Eclipse-based Spring Tool Suite (STS) for the development and debugging of Spring Boot
              applications."
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCards
              imgPath={tcs}
              company="TCS"
              title="Software Developer"
              timeline="Jan'2020 - Dec'2022"
              description="&rarr;&nbsp;Coded RESTful web services using Spring Boot, including Golang, to revamp an existing application.<br/>
              &rarr;&nbsp;Established Apache Kafka Topics and implemented Advanced Encryption Standard (AES) for secure password encryption and decryption in Cassandra connection classes.<br/>
              &rarr;&nbsp;Designed and implemented RESTful endpoints, business logic, and service layer components using Spring and Golang. Integrated Perl scripts to automate specific data processing tasks, enhancing system efficiency and functionality.<br/>
              &rarr;&nbsp;Maintained and optimized legacy systems using IBM RPG while integrating modern technologies to improve overall system efficiency and functionality.<br/>
              &rarr;&nbsp;Developed and maintained WinAPI components for seamless integration with existing applications, enhancing overall system efficiency and functionality.<br/>
              &rarr;&nbsp;Deployed Spring Boot-based microservices on AWS EC2 instances incorporating Golang for enhanced functionality.<br/>
              &rarr;&nbsp;Utilized Spring Boot framework for developing Presentation and Business Layers.<br/>
              &rarr;&nbsp;Configured and established a Microservices architecture integrated with Spring Boot applications, incorporating Golang.<br/>
              &rarr;&nbsp;Leveraged Spring Boot's efficiency in building cloud microservices with minimal configuration.<br/>
              &rarr;&nbsp;Managed dependency injection using Spring Boot and developed, tested, and supported microservices.<br/>
              &rarr;&nbsp;Employed Node.js to develop standalone Microservices, aligning with Node.js proficiency.<br/>
              &rarr;&nbsp;Implemented Angular framework to create responsive and dynamic user interfaces, enhancing user experience.<br/>
              &rarr;&nbsp;
              Utilized Spring Boot properties like actuators and health checkers to improve microservice implementations.<br/>
              &rarr;&nbsp;Worked with NoSQL database Cassandra to perform CRUD operations (Update, Insert, and Delete data).<br/>
              &rarr;&nbsp;Wrote SQL queries and utilized I Batis as a DB connectivity and persistence tool.<br/>
              &rarr;&nbsp;Utilized Hibernate as the ORM tool to communicate with the database and worked with Hibernate Query Language (HQL).<br/>
              &rarr;&nbsp;Developed Model logic using Java Beans and used Hibernate to store persistence data in an Oracle database.<br/>
              &rarr;&nbsp;Designed service layers using Spring Framework and developed business logic with Spring Boot.<br/>
              &rarr;&nbsp;Transitioned from Java to Python, demonstrating proficiency in C++ and C# while applying strong software engineering principles to Django development.<br/>
              &rarr;&nbsp;Utilized PHP, Redux, TypeScript, RTK Query, and React to develop RESTful web services using Spring Boot, showcasing expertise in ASP .NET and .NET Core.<br/>
              &rarr;&nbsp;Leveraged Linux expertise to troubleshoot and optimize microservices' performance on AWS EC2 instances, aligning with Linux requirements.<br/>
              &rarr;&nbsp;Implemented Docker and Spring Boot for microservices management, demonstrating containerization
              and distributed systems expertise.<br/>
              &rarr;&nbsp;Deployed EC2 instances on AWS, showcasing hands-on experience with cloud platforms.<br/>
              &rarr;&nbsp;Utilized code coverage analysis tools like Parasoft, VectorCast, and LDRA to ensure comprehensive testing and code quality.<br/>
              &rarr;&nbsp;Familiarity with SaaS solutions and Azure, demonstrated through hands-on experience with AWS and containerization, aligning with Azure and SaaS requirements.<br/>
              &rarr;&nbsp;Developed a MongoDB-based data persistence layer, supporting CRUD operations and optimizing data retrieval.<br/>
              &rarr;&nbsp;Familiarized with PostgreSQL for database operations, including Golang, aligning with PostgreSQL experience.<br/>
              &rarr;&nbsp;Created JUnit test suites to test Hibernate DAOs, REST controllers, and data upload to the backend database.<br/>
              &rarr;&nbsp;Utilized Maven for build management and explored POM dependencies and plugins.<br/>
              &rarr;&nbsp;Implemented Jenkins for Continuous Integration and deployment (CI/CD) into Tomcat Application Server.<br/>
              &rarr;&nbsp;Designed and managed API system deployment using a fast HTTP server and Amazon AWS architecture, automating AWSS3 data upload and download.<br/>
              &rarr;&nbsp;Participated in requirement gathering discussions and collaborated closely with the business team."
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCards
              imgPath={comakeit}
              company="coMakeIT"
              title="Associate Software Engineer"
              timeline="May'2018 - Dec'2019"
              description="&rarr;&nbsp;Prepared the technical design documents and unit test case documents.<br/>
              &rarr;&nbsp;Implemented business logic using core Java, addressing product defects.<br/>
              &rarr;&nbsp;Managed application deployment and maintenance.<br/>
              &rarr;&nbsp;Contributed to Unit integration, bug resolution, and User acceptance testing with test cases.<br/>
              &rarr;&nbsp;Employed JUnit Framework for unit and integration testing via test case creation.<br/>
              &rarr;&nbsp;Exhibited strong Java skills while enhancing core Java business logic, resolving product defects, and showcasing proficiency in C++ and C#, with additional expertise in WinAPI.<br/>
              &rarr;&nbsp;Collaborated on the development of a Django web application, demonstrating expertise in web development using Python and the Django framework to foster cross-functional collaboration.<br/>
              &rarr;&nbsp;Collaborated with teams to design and implement components for distributed systems, highlighting experience in this field.<br/>
              &rarr;&nbsp;Gained practical experience in Linux environments through application deployment and maintenance.<br/>
              &rarr;&nbsp;Applied DevOps practices and tools for continuous integration and deployment, contributing to streamlined development workflows with a focus on Golang applications.<br/>
              &rarr;&nbsp;Developed Angular components and seamlessly integrated them into a dynamic front-end, leveraging ASP .Net and SaaS skills alongside Angular.<br/>
              &rarr;&nbsp;Demonstrated familiarity with cloud technologies through participation in projects involving Azure services.<br/>
              &rarr;&nbsp;Developed Node.js applications, showcasing proficiency in Node.js to meet project requirements, alongside experience in Golang.<br/>
              &rarr;&nbsp;Utilized MongoDB to create and implement a robust database solution, enhancing data storage and retrieval capabilities.<br/>
              &rarr;&nbsp;Developed PHP scripts and incorporated them into web applications, showcasing proficiency in PHP development.<br/>
              &rarr;&nbsp;Gained expertise in the UI layer using HTML, XHTML, AJAX, and CSS, aligning with ASP .Net and SaaS experience.<br/>
              &rarr;&nbsp;Actively participated in Agile Scrum methodologies, showcasing the ability to work effectively in fast-paced, collaborative environments.<br/>
              &rarr;&nbsp;Employed PL/SQL for database development, aligning with the required PostgreSQL experience.<br/>
              &rarr;&nbsp;Attended daily scrums, effectively communicating status updates and highlighting issues for resolution.<br/>
              &rarr;&nbsp;Participated in technical design discussions, offering valuable input on efficient ways to develop specific functionalities.<br/>
              &rarr;&nbsp;Worked extensively with XML schema and structures, utilizing XSL/XSLT for formatting and transforming XML documents.<br/>
              &rarr;&nbsp;Prepared test scripts and conducted unit and system testing.<br/>
              &rarr;&nbsp;Developed PL/SQL packages, functions, and stored procedures.<br/>
              &rarr;&nbsp;Interacted with the business team to gather functional specifications and design requirements.<br/>
              &rarr;&nbsp;Developed Node.js applications, showcasing proficiency in Node.js to meet project requirements.<br/>
              &rarr;&nbsp;Involved in Unit integration, bug fixing, and User acceptance testing with test cases."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
