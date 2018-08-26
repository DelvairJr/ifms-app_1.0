export function selectTab(tabId) {
    return {
        //action responsalvel por retornar qual aba esta selecionada
        type: 'TAB_SELECTED',
        //retorna o Id da aba
        payload: tabId
    }

}

//retorna um objeto com cada ABA que deve ser exibida
export function showTabs(...tabIds) { //recebe vários parametros e coloca todos em um ARRAY
    
    const tabsToShow = {}
    //percorre cada elemento e adiciona o valor TRUE
    tabIds.forEach(element => tabsToShow[element] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}