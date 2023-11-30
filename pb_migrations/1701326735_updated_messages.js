/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rclcv83smg6ibe2")

  collection.listRule = "@request.auth.id != \"\" && (@request.auth.id ?~ @collection.channels.server.members.id || @request.auth.id ?~ @collection.channels.server.admins.id || @request.auth.id = @collection.channels.server.owner.id)"
  collection.viewRule = "@request.auth.id != \"\" && (@request.auth.id ?~ @collection.channels.server.members.id || @request.auth.id ?~ @collection.channels.server.admins.id || @request.auth.id = @collection.channels.server.owner.id)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rclcv83smg6ibe2")

  collection.listRule = "@request.auth.id ?~ @collection.channels.server.members.id"
  collection.viewRule = "@request.auth.id ?~ @collection.channels.server.members.id"

  return dao.saveCollection(collection)
})
