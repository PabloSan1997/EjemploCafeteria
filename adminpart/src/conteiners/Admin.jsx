import React from 'react'
import { useContextoAdmin } from '../contextos'
import { CajaCafe } from '../components/CajaCafe';
import AgregarCafe from '../components/AgregarCafe';
import { Header } from '../components/Header';

export function Admin() {
  const { cafe } = useContextoAdmin();
  return (
    <>
      <Header />
      <AgregarCafe />
      <div className="area-porductos">
        {cafe.map(ele =>
        (<CajaCafe
          key={ele._id}
          name={ele.name}
          store={ele.store}
          description={ele.description}
          imagen={ele.imagen}
          type={ele.type}
          price={ele.price}
          id={ele._id}
        />
        )
        )}
      </div>
    </>
  )
}

