import React, { useContext } from 'react';
import { TrynowContext } from '../../TryNow';
// components --
import { productData } from './productData';
import ProductLayout from './ProductLayout'; 
import ProductModal from './modal/ProductModal';


function Products() {
    // context-value --
    const { showModal } = useContext(TrynowContext);


    return (
        <>
            <div className='w-full py-16 flex justify-center items-center'>

                <div className='grid grid-cols-2 gap-10'>
                    {
                        productData.map((data, id) => (
                            <div key={id}>
                                <ProductLayout img={data.img} name={data.name} description={data.description} points={data.points} />
                            </div>
                        ))
                    }
                </div>

                {/* -- modal -- */}
                <div>
                    {
                        showModal ? <ProductModal /> : null
                    }
                </div>
            </div>
        </>
    )
}

export default Products;