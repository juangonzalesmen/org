import { useState } from 'react';
import './MiOrg.css'

const MiOrg = (props) => {
    //Estado - Hooks
    // estudiar la cantidad de hooks que hay≥
    //useState
    //useState()
    // const [nombreVariable, funcionActualizar] = useState(valorInicial)
    // console.log();
    // const [nombre, actualizarNombre] = useState("Juan")
    // const [mostrar, actualizarMostar] = useState(true)

    // const manejarClick = ()=>{
    //     console.log("Mostrar", !mostrar);
    //     actualizarMostar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg