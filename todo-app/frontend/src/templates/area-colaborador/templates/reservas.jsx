import React, {Component, Fragment} from 'react'
import Menu from '../menu-individual-colaborador'
import FloatButton from '../../../componentes/fab-action-button'
import '../../../../public/assets/css/reservas.css'
import GridList from '../../../componentes/grid-list'
import '../../../../public/assets/css/reservas.css'

export default class Reservas extends Component{
    render() {
        return(
            <div>
                <Menu/>
                    <div className='container-reservas'>
                        <GridList/>
                        <FloatButton/>
                    </div>
            </div>
        )
    }
}