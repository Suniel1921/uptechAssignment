// import React from 'react'
// import './projects.css'

// const Projects = () => {
//   return (
//     <>
//     <div className='prodcjects_container'>
//       <div className="project_section">
//         <div className="project_content"></div>
//         <div className='project_title'>
//         <p>Honorable Mention</p>
//         <h2>Featured Products</h2>
//         <p>Some of the business project name required</p>

//         <div className='projectList'>
//           <div className='productImage'>
//           <img src="/image/p4.jpg" alt="" />
//           <img src="/image/p5.jpg" alt="" />
//           <img src="/image/p6.jpg" alt="" />
//           <img src="/image/p7.jpg" alt="" />
//           </div>
//         </div>
//         </div>
//       </div>
      
//     </div>
      
//     </>
//   )
// }

// export default Projects





import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <div className='projects_container'>
      <div className="project_section">
        <div className='project_title'>
          <p>Honorable Mention</p>
          <h2>Featured Products</h2>
          <p>Some of the business project names required</p>
        </div>

        <div className='projectList'>
          <div className='productImage'>
            <div className="overlay"></div> {/* This is the overlay */}
            <img src="/image/p4.jpg" alt="" />
            <img src="/image/p5.jpg" alt="" />
            <img src="/image/p6.jpg" alt="" />
            <img src="/image/p7.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
