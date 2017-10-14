import * as fs from 'fs'
if (new RegExp('node_modules').test(__dirname)) {
  const oldPackage = fs.readFileSync('../../package.json')

  fs.renameSync('../../package.json', '../../package.old.json')

  const newPackage = { ...JSON.parse(oldPackage), scripts: { ...JSON.parse(oldPackage).scripts, 'install-admin': 'node node_modules/adminlte-react-base/dist/tasks/copyFiles' } }

  fs.writeFileSync('../../package.json', JSON.stringify(newPackage, null, '  '))

}
