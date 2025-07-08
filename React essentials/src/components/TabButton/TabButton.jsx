import './TabButton.css';

export default function TabButton({ children, isSelected, ...props }) {

	return (
		<li>
			<button className={isSelected ? "active" : undefined} {...props}>{children}</button>
		</li>
	);
}

// props.children prop contains any content inside the opening and closing tags of the TabButton component.