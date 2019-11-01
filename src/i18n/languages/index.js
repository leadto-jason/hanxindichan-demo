const LANG = process.env.LANG
let lang = {}

try {
  LANG && (lang = require('./' + LANG + '.js'))
}
catch (err) {

}

export default lang.default || lang
