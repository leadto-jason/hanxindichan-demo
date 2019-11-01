const LANG = process.env.LANG

try {
  LANG && require('./' + LANG + '.js')
}
catch (err) {

}
