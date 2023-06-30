import React, {useState} from 'react';
// components --
// import Products from './components/products/Products';
import Banner from './components/banner/Banner';
import Products from './components/products/Products';


export const TrynowContext = React.createContext();


function TryNow() {
    const [formData1, setFormData1] = useState({});
    const [formData2, setFormData2] = useState({});
    const [formData3, setFormData3] = useState({});
    const [formNumber, setFormNumber] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [allFormsData, setAllFormData] = useState({});

    return (
        <>
            <div className='w-full bg-background'>

                <TrynowContext.Provider value={{formData1, setFormData1, formData2, setFormData2, formData3, setFormData3, allFormsData, setAllFormData, formNumber, setFormNumber, showModal, setShowModal}}>
                    <Products />
                    <Banner />
                </TrynowContext.Provider>

            </div>
        </>
    )
}

export default TryNow;