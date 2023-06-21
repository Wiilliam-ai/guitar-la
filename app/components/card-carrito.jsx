
const CardCarrito = ({guitarra,actualizarCantidad,eliminarProducto}) => {
  const {cantidad,imagen,nombre,precio} = guitarra
  const subTotal = cantidad * precio
  return (
    <div className="producto">
        <div className="">
            <img src={imagen} alt={`Guitarra ${nombre}`} loading="lazy"/>
        </div>
        <div>
            <p className="nombre">Producto: <span>{nombre}</span></p>
            <select className="cantidad" 
              value={cantidad}
              onChange={e => actualizarCantidad({
                cantidad: Number(e.target.value),
                id: guitarra.id
              })}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <p className="precio">Precio: <span>S/{precio}</span></p>
            <p className="subtotal">Sub total: <span>S/{subTotal}</span></p>
        </div>
        <button onClick={e => eliminarProducto(guitarra.id)} 
        className="boton-eliminar">X</button>
    </div>
  )
}

export default CardCarrito