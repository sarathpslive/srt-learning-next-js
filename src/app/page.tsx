export default function Home() {
  return (
    <div>
      <main>
        <header className="resume-header">
          <h1>Sarath PS</h1>
          <p>Senior Software Engineer</p>
        </header>
        <section className="resume-section">
          <h2>About Me</h2>
          <p>
            Passionate software engineer with 10+ years of experience in building
            scalable web applications and working with modern technologies. Skilled in
            React, TypeScript, Node.js, and cloud-based solutions. Adept at collaborating
            with cross-functional teams to deliver high-quality software.
          </p>
        </section>
        <section className="resume-section">
          <h2>Experience</h2>
          <ul>
            <li>
              <span>Senior Developer</span> - TechCorp (2020 - Present)
              <p>
                - Led a team of 5 developers to design and implement a scalable e-commerce platform.<br />
                - Improved application performance by 30% through optimization techniques.<br />
                - Mentored junior developers and conducted code reviews to ensure best practices.
              </p>
            </li>
            <li>
              <span>Frontend Developer</span> - Webify (2017 - 2020)
              <p>
                - Built responsive and user-friendly web interfaces using React and CSS.<br />
                - Collaborated with designers to create seamless user experiences.<br />
                - Integrated RESTful APIs to fetch and display dynamic data.
              </p>
            </li>
          </ul>
        </section>
        <section className="resume-section">
          <h2>Education</h2>
          <p>
            <span>Bachelor of Science in Computer Science</span> - XYZ University (2013 - 2017)<br />
            - Graduated with honors, GPA: 3.8/4.0<br />
            - Relevant coursework: Data Structures, Algorithms, Web Development, Cloud Computing.
          </p>
        </section>
        <section className="resume-section">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
            <li>Node.js / Express</li>
            <li>CSS / TailwindCSS</li>
            <li>AWS / Azure</li>
            <li>Git / CI-CD</li>
          </ul>
        </section>
        <section className="resume-section">
          <h2>Projects</h2>
          <ul>
            <li>
              <span>E-Commerce Platform</span> - A full-stack application for online shopping.<br />
              - Tech Stack: React, Node.js, MongoDB, AWS.<br />
              - Features: User authentication, product search, and payment integration.
            </li>
            <li>
              <span>Portfolio Website</span> - A personal portfolio to showcase projects and skills.<br />
              - Tech Stack: Next.js, TailwindCSS.<br />
              - Features: Responsive design, dynamic content, and contact form.
            </li>
          </ul>
        </section>
        <section className="resume-section">
          <h2>Contact</h2>
          <p>Email: john.doe@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>
            LinkedIn: <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">linkedin.com/in/johndoe</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">github.com/johndoe</a>
          </p>
        </section>
        <footer className="resume-footer">
          © 2023 John Doe. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
