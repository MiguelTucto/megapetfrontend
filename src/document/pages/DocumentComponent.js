import React, { useState, useRef } from 'react';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

const DocumentComponent = ({pet, setVisibleDocument}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef(null);
    const items = [
        {
            label: 'Personal',
            command: (event) => {
                toast.current.show({severity: 'info', summary: 'First Step', detail: event.item.label});
            }
        },
        {
            label: 'Additional',
            command: (event) => {
                toast.current.show({severity: 'info', summary: 'Second Step', detail: event.item.label});
            }
        }
    ];

    const renderContent = () => {
        switch (activeIndex) {
            case 0:
                return(
                    <FirstStep setActiveIndex={setActiveIndex} />
                );
            case 1:
                return(
                    <SecondStep pet={pet} setVisibleDocument={setVisibleDocument}/>
                );
            default:
                return null;
        }
    }

    return (
        <div className="card mt-6">
            <Toast ref={toast}></Toast>
            <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} />
            {renderContent()}
        </div>
    )
}

export default DocumentComponent;