document.addEventListener('DOMContentLoaded', () => {
    
    const videoSelva = document.getElementById('video-selva');
    const hudTexto = document.getElementById('hud-texto');
    
    // Captura de los tres botones
    const btnHumano = document.getElementById('btn-humano');
    const btnJaguarDia = document.getElementById('btn-jaguar-dia');
    const btnJaguarNoche = document.getElementById('btn-jaguar-noche');

    // Función auxiliar para limpiar estados visuales en los botones
    function resetearBotones() {
        btnHumano.classList.remove('activo');
        btnJaguarDia.classList.remove('activo');
        btnJaguarNoche.classList.remove('activo');
        document.body.className = ""; // Limpia todas las clases del body
    }

    // 1. EVENTO: VISTA HUMANA
    btnHumano.addEventListener('click', () => {
        resetearBotones();
        btnHumano.classList.add('activo');
        document.body.classList.add('modo-humano');
        hudTexto.innerHTML = `
            <p><strong>MODO:</strong> VISTA HUMANA (Homo sapiens)</p>
            <p><strong>ESPECTRO:</strong> TRICROMÁTICO (RGB COMPLETO)</p>
            <p><strong>ÓPTICA:</strong> ENFOQUE CRISTALINO ESTÁNDAR</p>
            <p><strong>RESOLUCIÓN:</strong> ALTA DEFINICIÓN LUZ DÍA</p>
        `;
    });

    // 2. EVENTO: JAGUAR DÍA
    btnJaguarDia.addEventListener('click', () => {
        resetearBotones();
        btnJaguarDia.classList.add('activo');
        document.body.classList.add('modo-jaguar-dia');
        hudTexto.innerHTML = `
            <p><strong>MODO:</strong> VISTA DIURNA DE JAGUAR (Panthera onca)</p>
            <p><strong>ESPECTRO:</strong> DICROMÁTICO (Falta de Conos Rojos)</p>
            <p><strong>ÓPTICA:</strong> SEGUIMIENTO DE MOVIMIENTO CAMUFLADO</p>
            <p><strong>SENSIVILIDAD:</strong> CONTRASTE AMARILLO/AZUL REGULAR</p>
        `;
    });

    // 3. EVENTO: JAGUAR NOCHE
    btnJaguarNoche.addEventListener('click', () => {
        resetearBotones();
        btnJaguarNoche.classList.add('activo');
        document.body.classList.add('modo-jaguar-noche');
        hudTexto.innerHTML = `
            <p><strong>MODO:</strong> VISTA NOCTURNA DE JAGUAR (Panthera onca)</p>
            <p><strong>ESPECTRO:</strong> ACROMÁTICO / MONOCROMÁTICO NOCTURNO</p>
            <p><strong>ÓPTICA:</strong> RENDIMIENTO LUMÍNICO MÁXIMO</p>
            <p><strong>SENSIVILIDAD:</strong> TAPETUM LUCIDUM (Luz Amplificada 6x)</p>
        `;
    });

    // 2. FÍSICAS DE MOVIMIENTO DE MIRADA (Mantiene el efecto Lerp ágil del jaguar)
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;
    });

    function animarCamaraJaguar() {
        currentX += (mouseX - currentX) * 0.12;
        currentY += (mouseY - currentY) * 0.12;

        const rangoX = 70; 
        const rangoY = 50;
        
        const moverX = currentX * -rangoX;
        const moverY = currentY * -rangoY;

        if (videoSelva) {
            videoSelva.style.transform = `translate(${moverX}px, ${moverY}px)`;
        }

        requestAnimationFrame(animarCamaraJaguar);
    }

    animarCamaraJaguar();
});
