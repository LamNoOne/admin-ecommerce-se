import React from "react"
import { useState } from "react"

const Pricing = ({ price, oldPrice, setPrice, setOldPrice}) => {
    const setPriceHandler = (value) => {
       value > 0 ? setPrice(value) : setPrice('')
    } 

    const setOldPriceHandler = (value) => {
        value > 0 ? setOldPrice(value) : setOldPrice('')
     }
    return (
        <div className="flex flex-col mt-6">
            <h1 className="text-lg font-semibold mb-4">Pricing</h1>
            <div className="flex justify-between items-center gap-4">
                <div className="input-price-product flex flex-col items-start w-full gap-2">
                    <label
                        htmlFor="form-product/price"
                        className="form-label font-medium text-base"
                    >
                        Price
                    </label>
                    <input
                        type="number"
                        className="form-control text-base px-2 py-2 border outline-none hover:shadow-md w-full"
                        id="form-product/price"
                        value={price}
                        onChange={(e) => setPriceHandler(e.target.value)}
                    />
                </div>
                <div className="input-price-product flex flex-col items-start w-full gap-2">
                    <label
                        htmlFor="form-product/old-price"
                        className="form-label font-medium text-base"
                    >
                        Old price
                    </label>
                    <input
                        type="number"
                        className="form-control text-base px-2 py-2 border outline-none hover:shadow-md w-full"
                        id="form-product/old-price"
                        value={oldPrice}
                        onChange={(e) => setOldPriceHandler(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Pricing
