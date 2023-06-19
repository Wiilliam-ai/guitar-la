export async function obtenerGuitarras() {
    const url = `${process.env.API_URL}/guitarras?populate=imagen`;
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado;
}

export async function obtenerGuitarra(nombre){
    const url = `${process.env.API_URL}/guitarras?filters[url]=${nombre}&populate=imagen`;
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}