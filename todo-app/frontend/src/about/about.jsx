import React from 'react'
import PageHeader from '../templates/pageHeader';
import '../../public/assets/css/about.css'
// import BannerPrincipal from '../../public/assets/images/banner-principal.png'

export default props => (
    <div className='conteudo-principal'>
        {/* <img className='banner-principal' src={BannerPrincipal}></img> */}
        <div className='primeiro-conteudo'>
          <h1 className='title'>  Simply Book</h1>
        <div  className='subtitle'>
                <p className='first-line'>Bem-vindo ao Simply Book, a ferramenta que te ajudará a gerenciar sua empresa,</p>
                <p> com mais de praticidade, rapidez e unindo seus colaboradores.</p>
        </div>
            <PageHeader></PageHeader>
            <h2>Visão</h2>
                <p className='first-line'>Criar oportunidades de melhorar a dinâmica para cada integrante da empresa através </p>
                <p>do desenvolvimento contínuo de ferramentas de organização.</p>
            <h2>Missão</h2>
                <p className='first-line'>A missão do Simply Book é conectar profissionais de toda organização,</p>
                <p> tornando-os mais produtivos e bem-sucedido.</p>
            <h2>Quem Somos</h2>
                <p className='first-line'>O LinkedIn começou através de uma idéia de Traine, com Verônica Souza em 2020</p>
                <p> e foi oficialmente lançado em X de XXXX de 20XX.</p>
                <p className='first-line'>O Simply Book é uma ferramenta com um modelo de organização prático e diversificado, </p>
                <p>que visa ampliar suas ideias sempre.</p>
        </div>
    </div>

    
)