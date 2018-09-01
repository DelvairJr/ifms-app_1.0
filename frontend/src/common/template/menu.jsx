import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="#" label="Dashboard" icon="dashboard" />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#professores" label="Professores" icon="id-card" />
            <MenuItem path="#editais" label="Editais" icon="file" />
            <MenuItem path="#calendariodeprovas" label="Calendário de Provas" icon="calendar-o" />
        </MenuTree>
    </ul>
)