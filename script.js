let registros = [];

function agregarRegistro() {
    const clave = document.getElementById("terminacionClave").value;
    const fechaAlta = document.getElementById("fechaAlta").value;
    const fechaBaja = document.getElementById("fechaBaja").value;
    const tipo = document.getElementById("tipo").value;
    const entidad = document.getElementById("entidadFederativa").value;

    registros.push({ clave, fechaAlta, fechaBaja, tipo, entidad });
    mostrarRegistros();
}

function mostrarRegistros() {
    const tabla = document.getElementById("tablaRegistros");
    tabla.innerHTML = registros.map((registro) =>
        `<tr>
            <td>${registro.clave}</td>
            <td>${registro.fechaAlta}</td>
            <td>${registro.fechaBaja || '-'}</td>
            <td>${registro.tipo === '1' ? 'Activo' : 'Licencia'}</td>
            <td>${registro.entidad}</td>
            <td>${calcularIntervalo(registro.fechaAlta, registro.fechaBaja)}</td>
        </tr>`
    ).join('');
}

function calcularIntervalo(fechaAlta, fechaBaja) {
    if (!fechaBaja) return " - ";
    const fechaInicio = new Date(fechaAlta);
    const fechaFin = new Date(fechaBaja);
    const diff = fechaFin - fechaInicio;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const remainingDays = days % 30;

    return `${years} años, ${months} meses, ${remainingDays} días`;
}

function calcular() {
    let totalActivo = { years: 0, months: 0, days: 0 };
    let totalLicencia = { years: 0, months: 0, days: 0 };

    registros.forEach((registro) => {
        const interval = calcularIntervalo(registro.fechaAlta, registro.fechaBaja);
        const tipo = registro.tipo === '1' ? totalActivo : totalLicencia;
        
        // Parse years, months, days from interval and add to total
    });

    document.getElementById("tiempoActivo").innerText = `${totalActivo.years} años, ${totalActivo.months} meses, ${totalActivo.days} días`;
    document.getElementById("tiempoLicencia").innerText = `${totalLicencia.years} años, ${totalLicencia.months} meses, ${totalLicencia.days} días`;
}

function eliminarRegistro() {
    // Lógica para eliminar el registro seleccionado
}

function eliminarTodo() {
    registros = [];
    mostrarRegistros();
}
