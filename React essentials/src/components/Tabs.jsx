export default function Tabs({ children, buttons, ButtonsContainer }) {
// const ButtonsContainer = buttonsContainer;
// received component identifier as a prop
// prop must be usable as a custom component in the receiving component, it must start with uppercase character,
//  or must be remapped to variable that starts with uppercase character

	return (
		<>
			<ButtonsContainer>
				{buttons}
			</ButtonsContainer>
			{children}
		</>
	);
}