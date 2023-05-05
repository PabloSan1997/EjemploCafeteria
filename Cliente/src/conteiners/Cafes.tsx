
import { Header2 } from '../components/Header2'
import { useContexto } from '../contexto'
import { CafeDatos} from '../Api/leerCafe';
import { CajaMenu } from '../components/CajaMenu';
import "../styles/menuCafes.css";

export  function Cafes() {
  const {cafe} = useContexto();
  const desayunos:CafeDatos[] = cafe.filter(ele=>ele.type==="desayuno" && ele.store);
  const bebidas:CafeDatos[] = cafe.filter(ele=>ele.type==="cafe" && ele.store);
  return (
    <>
        <Header2/>
        <div className="contenedor-men">
          <CajaMenu desayunos={desayunos} bebidas={bebidas}/>
        </div>
    </>
  )
}

