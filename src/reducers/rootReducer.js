function addComponent(state = { newNodes : [] }, action) {
    return Object.assign({}, state, {newNodes : [action.nodeName]});
}

export default addComponent