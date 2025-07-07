export default function TabButton({ children, onSelect }) {

	return (
		<li>
			<button onClick={onSelect}>{children}</button>
		</li>
	);
}

// props.children prop contains any content inside the opening and closing tags of the TabButton component.