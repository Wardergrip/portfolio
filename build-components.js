const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');
const componentsDir = path.join(docsDir, 'components');

function readComponent(componentName) {
	const filePath = path.join(componentsDir, `${componentName}.html`);
	try {
		return fs.readFileSync(filePath, 'utf8').trim();
	} catch (error) {
		console.error(`Error reading component ${componentName}:`, error);
		return '';
	}
}

function replaceComponent(html, name, componentHtml) {
	const pattern = new RegExp(
		`<!-- COMPONENT:${name} -->[\\s\\S]*?<!-- \\/COMPONENT:${name} -->`,
		'g'
	);

	return html.replace(
		pattern,
		`<!-- COMPONENT:${name} -->\n${componentHtml}\n<!-- /COMPONENT:${name} -->`
	);
}

function injectComponents(htmlContent, navHtml, footerHtml, projectsOverviewHtml) {
	if (navHtml) {
		htmlContent = replaceComponent(htmlContent, 'nav', navHtml);
	}

	if (projectsOverviewHtml) {
		htmlContent = replaceComponent(htmlContent, 'projects-overview', projectsOverviewHtml);
	}

	if (footerHtml) {
		htmlContent = replaceComponent(htmlContent, 'footer', footerHtml);
	}

	return htmlContent;
}


function buildComponents() {
	console.log('Building components...');
	
	const navHtml = readComponent('nav');
	const footerHtml = readComponent('footer');
	const projectsOverviewHtml = readComponent('projects-overview');
	
	if (!navHtml || !footerHtml) {
		console.error('Failed to read component files');
		process.exit(1);
	}
	
	const htmlFiles = fs.readdirSync(docsDir)
		.filter(file => file.endsWith('.html'))
		.map(file => path.join(docsDir, file));
	
	let processedCount = 0;
	htmlFiles.forEach(filePath => {
		const htmlContent = fs.readFileSync(filePath, 'utf8');
		const updatedContent = injectComponents(htmlContent, navHtml, footerHtml, projectsOverviewHtml);
		fs.writeFileSync(filePath, updatedContent, 'utf8');
		processedCount++;
		console.log(`  Processed ${path.basename(filePath)}`);
	});
	
	console.log(`\nSUCCESS! Components injected into ${processedCount} file(s)`);
}

buildComponents();

