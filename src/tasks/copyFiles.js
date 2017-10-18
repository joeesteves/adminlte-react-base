import * as fs from 'fs'
import copy from 'recursive-copy'

const cb = (dir) => (err) => {
  console.log(err ? `Folder ${dir} already exists` : `Folder ${dir} succesfully created`)
}
// CREATE FOLDERS
fs.mkdir('src/components', cb('components'))
fs.mkdir('src/components/admin-lte', cb('components/admin-lte'))
fs.mkdir('src/globals', cb('globals'))

// COPY TEMPLATES
const templatePath = 'node_modules/adminlte-react-base/templates'
copy(`${templatePath}/components`, 'src/components')
  .then(() => console.log('components succesfully installed'))
  .catch(() => console.log('Error: Files already exist'))

copy(`${templatePath}/globals`, 'src/globals')
  .then(() => console.log('globals succesfully installed'))
  .catch(() => console.log('Error: Files already exist'))

copy(`${templatePath}/containers`, 'src/containers')
  .then(() => console.log('containers succesfully installed'))
  .catch(() => console.log('Error: Files already exist'))

copy(`${templatePath}/actions`, 'src/actions')
  .then(() => console.log('actions succesfully installed'))
  .catch(() => console.log('Error: Files already exist'))

  copy(`${templatePath}/reducers`, 'src/reducers')
  .then(() => console.log('reducers succesfully installed'))
  .catch(() => console.log('Error: Files already exist'))



fs.renameSync('src/App.js', 'src/App.old.js')
fs.writeFileSync('src/App.js', fs.readFileSync(`${templatePath}/App.js`))
fs.writeFileSync('src/store.js', fs.readFileSync(`${templatePath}/store.js`))
