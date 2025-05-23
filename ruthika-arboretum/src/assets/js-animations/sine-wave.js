console.log("before_wave_start")



export function Wave(val_line){
    const linectx = val_line.getContext("2d");
    let animationFrameId;

    function resizeCanvas() {
        val_line.width = window.innerWidth;
        val_line.height = window.innerHeight;
      }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // console.log("wave_start");
    // console.log(val_line);
    // console.log("xx");
    // console.log(line)

    
    // console.log(linectx)

    const vall_width = window.innerWidth;
    // const height = 100;
    const amp = 100;
    const wave_lth = 20;
    const speed = 0.2;
    let phase = 0;

    function drawWave(){
        // phase = 0
        linectx.clearRect(0, 0, val_line.width, val_line.height);

        linectx.beginPath();
        // linectx.moveTo(0, val_line.height / 2);

        for (let a = 0; a <= val_line.width; a++) {
            const b = amp * Math.sin((a / wave_lth) + phase) + val_line.height / 2;

            linectx.lineTo(a, b);
        }
        // linectx.stroke();

        // linectx.beginPath();
        // for (let a = 0; a <= val_line.width; a++) {
        //     const b = amp * Math.sin((a / wave_lth) + phase) + 150 + val_line.height / 2;

        //     linectx.lineTo(a, b);
        // }

        linectx.strokeStyle = '#00ffe1'
        linectx.lineWidth = 15;
        linectx.lineCap = "round";
        linectx.stroke();
        
        phase += speed;
        // phase = 0
        // console.log(phase)
        animationFrameId = requestAnimationFrame(drawWave);

    }

    if (!animationFrameId) {
        drawWave();
      }
      
   
    // linectx.moveTo(0, height / 2);

    

    

    
    // console.log("there")

}

// Wave("wave_canvas")