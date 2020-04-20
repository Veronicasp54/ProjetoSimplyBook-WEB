import React, {Component} from 'react'
import Menu from '../menu-individual-colaborador'
import Footer from '../../../componentes/footer'
import GridSalas from '../../../componentes/grid-salas'
import '../../../../public/assets/css/salas.css'

export default class SalasColaborador extends Component{
    render() {
        return(
            <div>
                <Menu/>
                    <div className='container-salas'>
                        <GridSalas/>
                    </div>
                {/* <Footer/> */}
            </div>
        )
    }
}