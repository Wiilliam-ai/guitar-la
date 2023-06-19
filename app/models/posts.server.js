export async function obtenerPosts() {
    const url = `${process.env.API_URL}/posts?populate=imagen`;
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado;
}

export async function obtenerPost(nombre){
    const url = `${process.env.API_URL}/posts?filters[url]=${nombre}&populate=imagen`;
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}