const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const componentsDir = path.join(publicDir, 'components');

function readComponent(componentName) {
	const filePath = path.join(componentsDir, `${componentName}.html`);
	try {
		return fs.readFileSync(filePath, 'utf8').trim();
	} catch (error) {
		console.error(`Error reading component ${componentName}:`, error);
		return '';
	}
}

function injectComponents(htmlContent, navHtml, footerHtml, projectsOverviewHtml) {
	htmlContent = htmlContent.replace(
		/<div id="nav-container"><\/div>/g,
		navHtml
	);
	
	htmlContent = htmlContent.replace(
		/<div id="footer-container"><\/div>/g,
		footerHtml
	);
	
	// Handle projects overview - replace comment with component content
	if (projectsOverviewHtml) {
		htmlContent = htmlContent.replace(
			/<!-- Projects Section -->\s*/g,
			projectsOverviewHtml + '\n\t\t\t\t'
		);
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
	
	const htmlFiles = fs.readdirSync(publicDir)
		.filter(file => file.endsWith('.html'))
		.map(file => path.join(publicDir, file));
	
	let processedCount = 0;
	htmlFiles.forEach(filePath => {
		const htmlContent = fs.readFileSync(filePath, 'utf8');
		const needsProcessing = htmlContent.includes('nav-container') || 
		                        htmlContent.includes('footer-container') ||
		                        htmlContent.includes('<!-- Projects Section -->');
		
		if (needsProcessing) {
			const updatedContent = injectComponents(htmlContent, navHtml, footerHtml, projectsOverviewHtml);
			fs.writeFileSync(filePath, updatedContent, 'utf8');
			processedCount++;
			console.log(`  Processed ${path.basename(filePath)}`);
		}
	});
	
	console.log(`\nSUCCESS! Components injected into ${processedCount} file(s)`);
}

buildComponents();

