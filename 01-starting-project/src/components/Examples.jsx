import { EXAMPLES } from "../data";
import { useState } from "react";
import TabButton from "./TabButtnon";
import Section from "./Section";
import Tabs from "./Tabs";

export function Examples(){
      const [selectTopic, setSelectedTopic] = useState();
      function handleSelect(selectButton) {
        setSelectedTopic(selectButton);
    }
    let tabContent = <p>Please select a topic</p>;
    if(selectTopic){
      tabContent = (<div id="tab-content">
        <h3>{EXAMPLES[selectTopic].title}</h3>
        <p>{EXAMPLES[selectTopic].description}</p>
        <pre>{EXAMPLES[selectTopic].code}</pre>
      </div>);
    }
    return(
        <Section title="Examples" id="examples">
            <Tabs buttonsContainer="menu" buttons={<>
                <TabButton isSelected={selectTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
                </>}>               
                {tabContent}
            </Tabs>
        <menu>
       
        </menu>
        
        
      </Section>
    );
}