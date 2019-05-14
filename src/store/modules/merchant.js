import axios from 'axios';
import * as types from '../mutation/merchant_type';

const state = {
    items: [
        { text: '홍성지업o사' },
        { text: '한솔마루' },
    ]
}

// getters
const getters = {
    getItems: () => {
        return state.items;
    }
}

// actions
const actions = {
    updateItems (context, tree) {
        axios
            .get('/todos')
            .then(r => r.data)
            .then(items => {
                context.commit('SET_ITEMS', items)
            })
        context.commit('SET_ITEMS', tree);
    },
    addItem (context, newItem) {
        context.commit('ADD_ITEM', newItem);
    }
}

// mutations
const mutations = {
    [types.SET_ITEMS] (state, newItems) {
         state.items = newItems;
    },
    [types.ADD_ITEM] (state, item){
        state.items.push(item);
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
