const dataDoEvento = new Date('Jun 22, 2025 20:00:00');
const timestampDoEvento = dataDoEvento.getTime();

const contaOtempo = setInterval(function() {
    const dataAtual = new Date();
    const timestampAtual = dataAtual.getTime();

    const distanciaAteOEvento = timestampDoEvento - timestampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteoEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteoEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteoEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteoEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);


    document.getElementById('contador').innerHTML = `${diasAteoEvento}d ${horasAteoEvento}h ${minutosAteoEvento}m ${segundosAteoEvento}s`;

    if (distanciaAteOEvento <= 0) {
        clearInterval(contaOtempo);
        document.getElementById('contador').innerHTML = 'Corre que já começou!'
    }
},1000);