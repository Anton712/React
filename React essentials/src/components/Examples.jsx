import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import TabButton from './TabButton/TabButton.jsx';

export default function Examples() {
	const [selectedTopic, setSelectedTopic] = useState();
	// useState is a React hook that allows you to add state to functional components.
	// It returns an array with two elements: the current state value and a function to update

	function handleSelect(selectedButton) {
		console.log("Tab selected - " + selectedButton);
		setSelectedTopic(selectedButton);
		// console.log("Tab selected - " + selectedButton);
		// if you log after the setSelectedTopic, it will still show the previous value because state updates are asynchronous.
	}

	let tabContent = <p>Please select a topic</p>;

	if (selectedTopic) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>
						{EXAMPLES[selectedTopic].code}
					</code>
				</pre>
			</div>
		);
	}

	return (
		<Section id="examples" title="Examples">
			<menu>
				<TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect("components")}>Components</TabButton>
				<TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect("jsx")}>JSX</TabButton>
				<TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect("props")}>Props</TabButton>
				<TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect("state")}>State</TabButton>
			</menu>
			{tabContent}
		</Section>
	);
}