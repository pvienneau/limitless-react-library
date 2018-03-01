const glob = require('glob')
const path = require('path')

module.exports = function (globPath, suffix) {
  var files = glob.sync(globPath)
  var entries = {}

  for (var i = 0; i < files.length; i++) {
    var entry = files[i]

    var keyName = path.basename(entry) + (suffix !== undefined ? suffix : '')
    entries[keyName] = entry
  }

  return entries
}
