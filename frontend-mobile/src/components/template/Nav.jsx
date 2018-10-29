import './Nav.css'

import React from 'react'

export default props =>
    <aside className="menu-area">
       <nav className="menu">
       {/* Refatorar menu */}
            <a href="/"><i className="fa fa-home"></i> Home</a>
            <a href="#/provas"><i className="fa fa-calendar-o"></i> Calendário de Provas</a>
            <a href="#/cursos"><i className="fa fa-mortar-board"></i> Cusros</a>
            <a href="#/editais"><i className="fa fa-file-o"></i> Editais</a>
            <a href="#/eventos"><i className="fa fa-flag-o"></i >Eventos</a>
            <a href="#/permanencia"><i className="fa fa-calendar"></i> Horario de PE</a>
            <a href="#/professores"><i className="fa fa-id-card-o"></i> Professores</a>
            <a href="#/regulamentos"><i className="fa fa-file-text-o"></i> Regulamentos</a>
       </nav>
    </aside>