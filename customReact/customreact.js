const customReander = (reactElement, container) => {
	const domElement = document.createElement(reactElement.type);
	domElement.innerHTML = reactElement.children;
	document.setAttribute('href', reactElement.props.href);
}


const reactElement = {
	type: "a",
	props: {
		href: "https://google.com",
		target: "_blank"
	},
	children: "Click me to visit google"
}

const mainContainer = document.getElementById("root");

customReander(reactElement, mainContainer);



































