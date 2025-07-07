export default function TabButton(props) {
	return (
		<li>
			<button>{props.children}</button>
		</li>
	);
}

// props.children prop contains any content inside the opening and closing tags of the TabButton component.