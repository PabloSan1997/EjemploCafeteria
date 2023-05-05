
import { Formulario } from '../components/Formulario'
import { Header2 } from '../components/Header2'
import MensajesArea from '../components/MensajesArea'
import "../styles/mensajes.css";
export  function Mensajes() {
  return (
    <>
        <Header2/>
        <h2 className="parte-mensaje mensaje1">Dejanos una reseña</h2>
        <Formulario/>
        <h2 className='parte-mensaje mensaje2'>Nuestras reseñas</h2>
        <MensajesArea/>
    </>
  )
}