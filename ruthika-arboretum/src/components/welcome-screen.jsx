import '../assets/css-files/main-window.css'
import { swingMotion, flyAway } from '../assets/js-animations/motions.js'; 
import { useRef, useEffect } from 'react'


export default function MainScreen(){
    const monkey_ref = useRef(null);

    const bird_con_ref = useRef(null);

    useEffect (() => {
        const monkey_refc = monkey_ref.current;
        const bird_con_refc = bird_con_ref.current;

        if (monkey_refc) {
            // console.log(monkey_refc.style)
            swingMotion(monkey_refc)
        }
        if (bird_con_refc) {
            flyAway(bird_con_refc)
        }
    }, []);
    return (
        <section className="pscroll1">
            <div className="wind">
                <h1 className="ptext">Chika !</h1>
                <img src="./src/assets/images/tree.png" alt="left tree" className="pstree le horizontal-spin out" />
                <img src="./src/assets/images/tree.png" alt="right tree" className="pstree in" />
                <img src="./src/assets/images/moon r.png" alt="moon with virindian highlights" className="moon" />
                <div className="mh"></div>
                <img src="./src/assets/images/t3 mid.png" alt="middle tree" className="pstree mid-tree" />
                {/* <img src="./src/assets/images/t3 mid.png" alt="middle tree" className="pstree mid-tree trs" /> */}
                <img src="./src/assets/images/forest tree line.png" alt="forest shrub line" className="fts" />
                <img src="./src/assets/images/forest tree line.png" alt="forest shrub line right" className="fts horizontal-spin ri"  />
                
                <div ref = {bird_con_ref} className ="bird-container">
                <img src="./src/assets/images/bird png.gif" alt="bird gif" className="bird gft" />
                <img src="./src/assets/images/bird png.gif" alt="bird gif" className="bird gf" />
                <img src="./src/assets/images/bird png.gif" alt="bird gif" className="bird gft" />
                <img src="./src/assets/images/bird png.gif" alt="bird gif" className="bird gf" />
                <img src="./src/assets/images/bird png.gif" alt="bird gif" className="bird gft" />

            </div>
                
                {/* <img src="./src/assets/images/b2 u.png" alt="fourth flying bird" className="bird marg" /> */}
                
                <img src="./src/assets/images/b2 u.png" alt="third flying bird" className="bird marge" />
                {/* <img src="./src/assets/images/bird u.png" alt="last flying bird" className="bird marget hr" /> */}
                
                <img src="./src/assets/images/monkey swing.png" ref = {monkey_ref} alt="monkey swinging from the left tree" className="monkey" />
                <img src="./src/assets/images/deer png.png" alt="left deer 1" className="landan" />
                <img src="./src/assets/images/deer r.png" alt="left deer 2" className="landan rid" />
                <img src="./src/assets/images/elk r.png" alt="right elk" className="landan elk" />
            </div>
                
        
        </section>
    )
}