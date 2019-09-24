import { uuidv4 } from 'uuid'

/**
 * `pouchdb-cluster`
 * 
 * Multi-master replication for PouchDB
 *
 * @demo demo/index.html
 */
class PouchDbCluster {

  constuctor(PouchDB, network, nickname, id) {
    super()
    this.PouchDB = PouchDB
    this.network = network
    this.nickname = nickname ? nickname : uuidv4()
    this.id = id ? id : uuidv4()
  }

}