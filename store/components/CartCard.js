import { add_product, remove_product, remove_specific_Product } from '@/store/cartReducer'
import { Button, Tooltip } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CartCard = ({elem}) => {



const DisPatch=useDispatch()
const Cart =useSelector(state=>state.cart)

    const addOneItem=(elem)=>{


        DisPatch(add_product({...elem,quant:1}))
        localStorage.setItem('cartuser',JSON.stringify(Cart))


    }

    const removeOneItem=(elem)=>{

            DisPatch(remove_product({id:elem.id}))
            localStorage.setItem('cartuser',JSON.stringify(Cart))


    }
    const removeOneItemTotal=(elem)=>{

        DisPatch(remove_specific_Product({id:elem.id}))

        localStorage.setItem('cartuser',JSON.stringify(Cart))


}












  return (
    <li className="flex flex-col min-w-full sm:flex-row sm:justify-between shadow-sm shadow-slate-400 rounded-md px-6 py-4 mx-2">
    <div className="flex w-full space-x-2 sm:space-x-4">
        <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={elem.imgLink} alt={elem.name} />
        <div className="flex flex-col justify-between w-full pb-4">
            <div className="flex justify-between w-full pb-2 space-x-2">
                <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{elem.name}</h3>
                    <p className="text-sm dark:text-gray-400">Classic</p>
                </div>
                <div className="text-right">
                    <p className="text-lg font-semibold">Rs {elem.price*elem.quant} ={elem.price} x {elem.quant} </p>
                    <p className="flex flex-row items-center justify-around mt-6 gap-6">
                        <Button onClick={()=>{addOneItem(elem)}}>+</Button>
                        <div>{elem.quant}</div>
                        <Button onClick={()=>{removeOneItem(elem)}}>-</Button>



                    </p>
                </div>
            </div>
            <div className="flex text-sm divide-x">
                <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1" onClick={()=>removeOneItemTotal(elem)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                    </svg>
               
                    <span>Remove</span>
                </button>
                <button type="button" className="flex items-center px-2 py-1 space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                    </svg>
                    <span>Add to favorites</span>
                </button>
            </div>
        </div>
    </div>
</li>
  )
}

export default CartCard