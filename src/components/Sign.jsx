import React, {useEffect, useRef} from 'react';

const Sign = () => {
        const canvasRef = useRef(null);
        const clearSignButton = useRef(null);
        useEffect(() => {
                const canvas = canvasRef.current
                const context = canvas.getContext('2d')

                let mouse = {x: 0, y: 0};
                let draw = false;

                function cleanSign() {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                }
                clearSignButton.current.onclick = cleanSign;
                canvas.addEventListener("mousedown", function (e) {

                    mouse.x = e.pageX - this.offsetLeft;
                    mouse.y = e.pageY - this.offsetTop;
                    draw = true;
                    context.beginPath();
                    context.moveTo(mouse.x, mouse.y);
                });
                canvas.addEventListener("mousemove", function (e) {

                    if (draw == true) {

                        mouse.x = e.pageX - this.offsetLeft;
                        mouse.y = e.pageY - this.offsetTop;
                        context.lineTo(mouse.x, mouse.y);
                        context.stroke();
                        let img = canvas.toDataURL('image/png'); //Получение картинки в dataUrl
                    }
                });
                canvas.addEventListener("mouseup", function (e) {

                    mouse.x = e.pageX - this.offsetLeft;
                    mouse.y = e.pageY - this.offsetTop;
                    context.lineTo(mouse.x, mouse.y);
                    context.stroke();
                    context.closePath();
                    draw = false;
                });
            }, []
        )

        return (
            <>
                <h3>Поставьте подпись</h3>
                <canvas className={'canvasSign'} ref={canvasRef}/>
                <button ref={clearSignButton}>Очистить</button>
            </>
        )
    }
;

export default Sign;