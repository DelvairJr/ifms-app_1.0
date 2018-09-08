import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="#" label="Dashboard" icon="dashboard" />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#calendario-de-provas" label="Calendário de Provas" icon="calendar-o" />
            <MenuItem path="#cursos" label="Cusros" icon="mortar-board" />
            <MenuItem path="#editais" label="Editais" icon="file-o" />
            <MenuItem path="#eventos" label="Eventos" icon="flag-o" />
            <MenuItem path="#horario-de-permanencia" label="Horario de PE" icon="calendar" />
            <MenuItem path="#professores" label="Professores" icon="id-card-o" />
            <MenuItem path="#regulamentos" label="Regulamentos" icon="file-text-o" />
        </MenuTree>
    </ul>
)