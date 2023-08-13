import React from 'react'
import "./Projects.css"
import ProA from './ProA'
import ProB from './ProB'
import ProC from './ProC'
import ProD from './ProD'
function Projects() {
  return (
    <div className='projects'>
      <div className="twolines">
      <h3 className='tit'>PORTFOLIO</h3>
      <h2 className='High'>Each project is a unique piece of development 🧩</h2>
      </div>
   
   <ProA/>
   <ProB/>
   <ProD/>
   <ProC/>
    </div>
  )
}

export default Projects
