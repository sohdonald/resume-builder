/** this is where we will add a route for a portfolio of sketches
 * 
 * make an object array with all the images we need
 * 
 * "sketches": [
 * {
 *  id:0
 *  sketch:../sketch-portfolio/sketches/img0.png  
 * }
 * ]
 * 
 * make blogs for each sketch
 * 
 * install this npm
 * npm i react-slideshow-image
 * 
import  "react-slideshow-image/dist/styles.css"
import {Fade, Zoom, Slide} from "react-slideshow-image"

turn this into a fetch request
const slideImages = [
    {
        img: './skesketch-portfolio/sketches/img0.png'
        alt: "boy smiling"
    }
] 


 function SketchPort() {
    return (
        <div>
        <h1> sketches </h1>
        <div className="sketch-slideshow"></div>
        <Blog make blog component here />
        </div>
    );
    
}
 */