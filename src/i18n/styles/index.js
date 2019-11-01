const LANG = process.env.LANG

try {
  LANG && import('./' + LANG + '.scss')
}
catch (err) {
}
