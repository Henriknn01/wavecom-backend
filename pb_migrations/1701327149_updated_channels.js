/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("50lp9hjs94eockl")

  collection.listRule = "@request.auth.id != \"\" && (@request.auth.id ?~ @collection.channels.server.members.id || @request.auth.id ?~ @collection.channels.server.admins.id || @request.auth.id = @collection.channels.server.owner.id) "
  collection.viewRule = "@request.auth.id != \"\" && (@request.auth.id ?~ @collection.channels.server.members.id || @request.auth.id ?~ @collection.channels.server.admins.id || @request.auth.id = @collection.channels.server.owner.id) "
  collection.createRule = "@request.auth.id != \"\" && (@request.auth.id ?~ @collection.channels.server.members.id || @request.auth.id ?~ @collection.channels.server.admins.id || @request.auth.id = @collection.channels.server.owner.id) "

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("50lp9hjs94eockl")

  collection.listRule = "@request.auth.id != \"\""
  collection.viewRule = "@request.auth.id != \"\""
  collection.createRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
})
