import { useEffect, useState } from "react"
import uploadCloud from "../config/Upload"

import {
    CategorySelection,
    Description,
    Inventory,
    Pricing,
    UploadImage,
} from "../components"
import { useParams, useNavigate } from "react-router-dom"
const Product = () => {
    let { id: productId } = useParams()
    const naviagte = useNavigate()
    console.log(productId)
    useEffect(() => {
        // if has product id
        // dispactch get product info
    }, [])
    // if has product id => get product info and fill
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [category, setCategory] = useState()
    const [selectedFile, setSelectedFile] = useState(null)
    const [price, setPrice] = useState("")
    const [oldPrice, setOldPrice] = useState("")
    const [sku, setSku] = useState("")
    const [quantity, setQuantity] = useState("")
    // get all single Product Info
    const submitImageHandler = async () => {
        try {
            let arr = []
            for (let i = 0; i < selectedFile.length; i++) {
                const data = await uploadCloud(selectedFile[i])
                arr.push(data)
            }
            return arr
        } catch (error) {
            console.log(error)
        }
    }

    const submitHandler = async () => {
        let url = []
        url = await submitImageHandler()
        console.log(
            description,
            name,
            url,
            category,
            price,
            oldPrice,
            sku,
            quantity
        )

        // Take data and send
        //post request-FOR NEW or
        ///put request to server-FOR HAS product ID => if and else
    }

    const deleteHandler = () => {
        // dispatch action delete
        // get promises state using ...(quen ba nos roi)
        // if status is success => navigate to product list
        naviagte("/product-list")
    }

    return (
        <>
            <section className="w-full">
                <div className="flex items-center justify-between">
                    <h1 className="text-[28px] font-medium mb-2">
                        Edit Product
                    </h1>
                    <button
                        type="submit"
                        disabled={!Boolean(productId)}
                        className="text-base mb-2 px-6 py-2 border mt-2 bg-[#ff0000] rounded text-white disabled:bg-red-500 hover:bg-orange-500 cursor-pointer disabled:cursor-none"
                        onClick={deleteHandler}
                    >
                        Delete
                    </button>
                </div>
                <div className="flex flex-row gap-6">
                    <div className="part-1 flex flex-col gap-6 flex-1">
                        <div className="flex flex-col border shadow-sm p-6 bg-white">
                            <h3 className="text-lg font-semibold mb-4">
                                Basic Infomation
                            </h3>
                            <div className="input-name-product flex flex-col items-start w-full gap-2">
                                <label
                                    htmlFor="form-product/name"
                                    className="form-label font-medium text-base"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control text-base px-2 py-2 border outline-none hover:shadow-md w-full"
                                    id="form-product/name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <h3 className="text-base font-semibold">
                                    Description
                                </h3>
                                <Description
                                    desciption={description}
                                    setDescription={setDescription}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col border shadow-sm px-6 pb-6 bg-white">
                            <Pricing
                                price={price}
                                oldPrice={oldPrice}
                                setPrice={setPrice}
                                setOldPrice={setOldPrice}
                            />
                        </div>
                        <div className="flex flex-col border shadow-sm px-6 pb-6 bg-white">
                            <Inventory
                                sku={sku}
                                setSku={setSku}
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />
                        </div>
                    </div>
                    <div className="part-2 flex flex-col gap-6 w-[384px]">
                        <div className="category">
                            <CategorySelection
                                category={category}
                                setCategory={setCategory}
                            />
                        </div>
                        <div className="upload-multiple-images">
                            <UploadImage
                                selectedFile={selectedFile}
                                setSelectedFile={setSelectedFile}
                            />
                        </div>
                    </div>
                </div>
                <div className="button-submit">
                    <button
                        type="submit"
                        className="text-base px-6 py-2 border mt-2 bg-[#ff0000] rounded text-white hover:bg-orange-500 cursor-pointer disabled:cursor-none"
                        onClick={submitHandler}
                    >
                        Save
                    </button>
                </div>
            </section>
        </>
    )
}

export default Product
