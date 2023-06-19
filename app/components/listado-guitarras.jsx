import Card from "./card"

const ListadoGuitarras = ({guitarras}) => {
  const guitarraPrincipal = guitarras.slice(0,3)
  return (
    <>
    <h2 className="heading">Nuestra Coleccion</h2>
        {
        guitarraPrincipal.length && (
          <div className="guitarras-grid">
            {
              guitarraPrincipal.map(guitarra => (
                 <Card key={guitarra?.id} guitarra={guitarra?.attributes}/>
                )
              )
            }
          </div>
        )
      }
    </>
  )
}

export default ListadoGuitarras