import './TabButton.css';

export default function TabButton({ children, onSelect, isSelected }) {

	return (
		<li>
			<button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
		</li>
	);
}

// props.children prop contains any content inside the opening and closing tags of the TabButton component.