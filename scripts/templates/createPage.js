import fs from 'fs'
import readline from 'readline'

const rl = readline.createInterface({
	// eslint-disable-next-line no-undef
	input: process.stdin,
	// eslint-disable-next-line no-undef
	output: process.stdout,
})

rl.question('Введите название папки: ', (folderName) => {
	const rootDir = `./src/pages/${folderName}`
	const uiDir = `${rootDir}/ui`

	// Создание корневой папки и подпапки 'ui'
	fs.mkdirSync(rootDir, { recursive: true })
	fs.mkdirSync(uiDir, { recursive: true })

	// Создание файла index.tsx
	const indexContent = `export { ${folderName} } from './ui/${folderName}.async'\n`
	fs.writeFileSync(`${rootDir}/index.tsx`, indexContent)

	// Создание файла в 'ui' с именем папки
	const uiContent = `const ${folderName} = () => {\n\treturn (\n\t\t<div>\n${folderName}\n\t\t</div>\n\t)\n}\n\nexport default ${folderName}\n`
	fs.writeFileSync(`${uiDir}/${folderName}.tsx`, uiContent)

	// Создание файла .async.tsx в 'ui'
	const uiAsyncContent = `import { lazy } from 'react'\n\nexport const ${folderName} = lazy(() => import('./${folderName}'))\n`
	fs.writeFileSync(`${uiDir}/${folderName}.async.tsx`, uiAsyncContent)

	console.log(`Структура для ${folderName} успешно создана.`)
	rl.close()
})
