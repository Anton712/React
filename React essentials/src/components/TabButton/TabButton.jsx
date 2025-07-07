export default function TabButton(props) {
	function handleClick() {
		console.log(`Tab clicked: ${props.children}`);
	}

	return (
		<li>
			<button onClick={handleClick}>{props.children}</button>
		</li>
	);
}

// props.children prop contains any content inside the opening and closing tags of the TabButton component.