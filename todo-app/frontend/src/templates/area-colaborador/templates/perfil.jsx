import React, {Component} from 'react'
import Menu from '../menu-individual-colaborador'
import PageHeader from '../../../componentes/pageHeader';
import '../../../../public/assets/css/perfil.css'
export default class Perfil extends Component{
    render() {
        return(
            <div>
                <Menu/>
                <div className='conteudo-principal'>

                        <div className='primeiro-conteudo'>
                        <h1 className='title'> Colaborador</h1>
                        <PageHeader></PageHeader>
                        <div  className='subtitle'>
                        <p >Nome: nome usuario</p>
                        <p >EMAIL: Email@email.com</p>
                        </div>
                        </div>

                        <PageHeader/>

                        <div className='primeiro-conteudo'>
                        <h1 className='title'> Empresa</h1>
                        <PageHeader></PageHeader>
                        <div  className='subtitle'>
                        <p >Empresa: nome empresa</p>
                        <p >EMAIL: Email@email.com</p>
                        <p> Outas informações</p>
                     </div>
                     </div>
                </div>
            </div>
        )
    }
}