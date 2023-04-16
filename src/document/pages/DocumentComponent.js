import React, { useState, useRef } from 'react';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

const DocumentComponent = ({pet}) => {
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
            label: 'Seat',
            command: (event) => {
                toast.current.show({severity: 'info', summary: 'Second Step', detail: event.item.label});
            }
        },
        {
            label: 'Payment',
            command: (event) => {
                toast.current.show({severity: 'info', summary: 'Third Step', detail: event.item.label});
            }
        },
        {
            label: 'Confirmation',
            command: (event) => {
                toast.current.show({severity: 'info', summary: 'Last Step', detail: event.item.label});
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
                    <SecondStep pet={pet} />
                );
            case 2:
                return (
                    <ThirdStep />
                );
            default:
                return null;
        }
    }

    return (
        <div className="card mt-6">
            <Toast ref={toast}></Toast>
            <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false}/>
            {renderContent()}
        </div>
    )
}

export default DocumentComponent;