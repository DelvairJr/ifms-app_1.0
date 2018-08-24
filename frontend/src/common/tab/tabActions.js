export function selectTab(tabId) {
    return {
        //action responsalvel por retornar qual aba esta selecionada
        type: 'TAB_SELECTED',
        //retorna o Id da aba
        payload: tabId
    }

}

export function showTabs(...tabIds) {
    const tabsToShow = {}
    tabIds.forEach(element => tabsToShow[element] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}