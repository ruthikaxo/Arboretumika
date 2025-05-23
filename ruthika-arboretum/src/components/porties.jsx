import '../assets/js-animations/sine-wave.js'
import '../assets/css-files/porties.css'

import { useRef, useEffect } from "react"
import { Wave } from '../assets/js-animations/sine-wave.js';

console.log("hello4")
export default function Porties() {
    const canvas_ref = useRef(null);
    const canvas_ref2 = useRef(null);
    useEffect (() => {
        const canv = canvas_ref.current;
        const canv2 = canvas_ref2.current;
        if (canv) {
            // const ctx_2d = canv.getContext("2d")
            // console.log("2d exists")
            // console.log(canv)
            // console.log(ctx_2d)
            Wave(canv)
        }
        if (canv2) {
            // const ctx2_2d = canv2.getContext("2d")
            // console.log("2d 2 exists")
            // console.log(canv2)
            // console.log(ctx2_2d)
            Wave(canv2)
        }
        else {
            console.error("It doesn't")
        }
    }, []);
    return (
        <>
            <section id="porties">
                <div className="port"> 
                    <div className="port-wind-left">
                        <img class= "cave_bg" src="../src/assets/images/stalactite bg.png" alt = "cave background" />
                    </div>
                    <div className="project-desc">
                    <canvas ref ={canvas_ref} className="wave_canvas" width="300" height="150"></canvas>
                    <p className='project-about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>

                <div className="port"> 
                <div className="project-desc">
                    <canvas ref ={canvas_ref2} className="wave_canvas" width="300" height="150"></canvas>
                    <p className='project-about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="port-wind-right">
                        <img class= "cave_bg" src="../src/assets/images/desert ls.png" alt = "desert landscape" />
                    </div> 
                    
                </div>
            </section>  

        </>
    )

}

