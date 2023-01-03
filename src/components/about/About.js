import React from 'react';
import { Card } from 'primereact/card';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

const About = () => {
  return (
   <div className="flex flex-wrap flex-column justify-content-center align-items-center  m-25 m-4 "  >
        
        <div  style={{ width: '25rem', marginBottom: '2em', color: "#f8f8f8", minWidth: "500px" }} >
              <div className="flex" style={{ width: "auto", height: "50px", backgroundColor: "rgb(140, 140, 140)"}}> 
                 
              </div>
            <p className="m-0 flex flex-wrap" style={{lineHeight: '1.5',  color: "#f8f8f8" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore 
                                sed consequuntur error  repudiandae numquam deserunt quisquam repellat libero 
                                asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                                uiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii kliolo
            </p>
        </div>
        <Card   style={{ width: '25rem', marginBottom: '2em', backgroundColor: "rgb(39, 36, 47)", color: "#f8f8f8", minWidth: "500px" }} >
            <p className="m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore 
                                sed consequuntur error  repudiandae numquam deserunt quisquam repellat libero 
                                asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                                uiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii kliolo
                </p>
        </Card>
        <Card  style={{ width: '25rem', marginBottom: '2em', backgroundColor: "rgb(39, 36, 47)", color: "#f8f8f8", minWidth: "500px" }} >
            <p className="m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore 
                                sed consequuntur error  repudiandae numquam deserunt quisquam repellat libero 
                                asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                                uiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii kliolo
            </p>
        </Card>
    </div> 
  )
}

export default About