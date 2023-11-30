/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qyuxogp5bw5r0p2")

  collection.listRule = "@request.auth.id != \"\" && (@request.auth.id ?~ members.id || @request.auth.id ?~ admins.id || @request.auth.id = owner.id)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qyuxogp5bw5r0p2")

  collection.listRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
})
