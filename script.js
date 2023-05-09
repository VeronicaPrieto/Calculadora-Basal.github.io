const CALCULAR = document.getElementById("calcular");
const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");

function calcFlujo (peso){
    const unidad ="Kg";
    let metodo, resultado;
    if (peso <30) {
        metodo = "Hollidar-Segar";
        const volumenDiario = peso * 100;
        const mantenimiento = Math.round(volumenDiario / 24 * 1,5 *10)/ 10 ;
        const mm = peso + (peso/2);
        resultado = `Volumen diario: ${volumenDiario} cc, <br>
                    Mantenimiento: ${mantenimiento} cc/hr, <br>
                    m+m/2: ${mm}`;        
    } 
    else {
        metodo = "Superficie Corporal";
        const sc1500 = peso * 1500;
        const sc2000 = peso * 2000;
        resultado = `SC * 1500: ${sc1500}, SC * 2000: ${sc2000}`;
    }
    return `Para un peso de ${peso} ${unidad}, <br>
            Se utilizo el metodo ${metodo}. <br>
            ${resultado}.`;
}

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento.toFixed() + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})