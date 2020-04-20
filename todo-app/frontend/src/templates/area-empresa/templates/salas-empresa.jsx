import React, {Component} from 'react'
import Menu from '../menu-individual-empresa'
import GridSalas from '../../../componentes/grid-salas'
import '../../../../public/assets/css/salas.css'

export default class SalasEmpresa extends Component{
    render() {
        return(
            <div>
                <Menu/>
                    <div className='container-salas'>
                        <GridSalas/>
                    </div>
            </div>
        )
    }
}