import { useState, useEffect } from "react"

const About = (props) => {
    // create state to hold about data
    const [about, setAbout] = useState(null);

    // create function to make api call
    const getAboutData = async () => {
        // make api call and get response
    const response = await fetch(props.URL + "about");
   
    // turn response into javascript object
    const data = await response.json();
    
    // set the about state to the data
    setAbout(data);
        
}
useEffect(() => getAboutData(), [])

const loaded = () => (
    <div>
        <h1>{about.name}</h1>
        <h3>{about.email}</h3>
        <p>{about.bio}</p>
    </div>
);
    return about ? loaded() : <h1>Loading...</h1>;
}

export default About