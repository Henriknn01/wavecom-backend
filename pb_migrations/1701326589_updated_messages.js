/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rclcv83smg6ibe2")

  collection.listRule = "@request.auth.id ?~ @collection.channels.server.members"
  collection.viewRule = "@request.auth.id ?~ @collection.channels.server.members"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rclcv83smg6ibe2")

  collection.listRule = "@request.auth.id ?= @collection.channels.server.members"
  collection.viewRule = "@request.auth.id ?= @collection.channels.server.members"

  return dao.saveCollection(collection)
})
