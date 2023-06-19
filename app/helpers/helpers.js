const formatearFecha = (dato) =>{
    const fecha = new Date(dato)
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaLegible = fecha.toLocaleDateString('es-ES', opcionesFecha);
    return fechaLegible
}

export{
    formatearFecha
}