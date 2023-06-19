import imagenNosotros from '../../public/img/nosotros.jpg'
import nosotrosCss from '../styles/nosotros.css'

export function meta() {
  return [
    { 
      title: 'Guitar La - Nosotros' 
    },
    {
      description: 'Venta de guitarras, blog de musica'
    },{
      keywords: ['Guitarras','Musica','Aprende Musica','Compra Guitarra']
    },{
      author: 'Guitar La' 
    }
  ]
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: nosotrosCss
    },
    {
      rel: 'preload',
      href: imagenNosotros,
      as: 'image'
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagenNosotros} alt="Imagen Nosotros" />
        <div className="">
          <p>Vestibulum quis magna nec risus tristique lacinia ultricies nec justo. Sed facilisis Aliquam consectetur accumsan elit in laoreet. Quisque placerat magna id bibendum posuere. Duis cursus augue leo, a posuere leo vulputate et. Donec congue ipsum elit, in vulputate sem vestibulum id. Etiam condimentum ultrices semper. Aenean nec augue sollicitudin, varius nisl vitae, scelerisque mauris. In sed urna nec justo auctor tristique a eget mauris. Integer non massa ac lorem scelerisque blandit in quis elit. Maecenas dapibus metus id nisl eleifend, nec laoreet erat ornare.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio blanditiis a ratione minima sit aperiam minus eaque expedita! Tempore amet inventore quo molestiae maiores tenetur, eum blanditiis nesciunt ad provident!</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros