console.log("before swing start");
 
export function swingMotion(val_item){
    console.log("swing start");
    
    window.addEventListener('scroll', ()=>{
        // val_item.style.transform = `rotate(${30}deg)`
        // console.log("scrolling");
        const y_axis_scroll = window.scrollY;
        const swing_angle = Math.sin(y_axis_scroll / 100) * 30;
        val_item.style.transform = `rotate(${swing_angle}deg)`;
        // console.log(val_item.style);
    })
}

export function flyAway (val_item){
    console.log("fly start");
    window.addEventListener('scroll', () => {
        const axis_scroll = window.scrollY;
        // const x_axis_scroll = window.scrollX;

        const move_hby = Math.sin(axis_scroll / 100) * 30;
        const move_vby = Math.sin(axis_scroll / 100) * 2;

        val_item.style.transform = `translate(${move_hby + 8}px, ${-(move_vby * 68)}%)` 

        console.log(move_hby, axis_scroll)
    })
}

