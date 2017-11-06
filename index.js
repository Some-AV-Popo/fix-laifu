module.exports = function FixLife(dispatch) {

  dispatch.hook('S_GET_USER_LIST', 5, {order: -100}, event => {
    for (let {id, deletion} of event.characters)
      if (!deletion) dispatch.toServer('C_DELETE_USER', 1, {id: id})
    event.characters = []
    return true
  })
}
