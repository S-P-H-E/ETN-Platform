"use client"
import { useCartItems, removeItemFromCart, updateItemQuantity } from "@/lib/cart";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa6";
import clsx from "clsx";

export default function Cart() {
    const [drop, setDrop] = useState(false)
    const [mounted, setMounted] = useState(false)
    const cartItems = useCartItems()

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleQuantityChange = (itemId: number, currentQuantity: number, change: number) => {
        const newQuantity = Math.min(10, Math.max(1, currentQuantity + change))
        updateItemQuantity(itemId, newQuantity)
    }

    const handleRemoveItem = (itemId: number) => {
        removeItemFromCart(itemId)
    }

    return (
        <div className="relative flex h-full px-5">
            <button 
                onClick={() => setDrop(!drop)} 
                className="cursor-pointer transition-all duration-300 hover:scale-110 relative"
            >
                <FaCartShopping className="text-xl" />
                {mounted && cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cartItems.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                )}
            </button>
            {drop && (
                <div className="absolute bg-blur border border-[var(--border)] p-6 w-96 max-h-96 z-10 top-[10px] right-[30px] rounded-2xl shadow-2xl text-white">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-xl font-semibold">Shopping Cart</h1>
                        <button 
                            className="cursor-pointer p-1 hover:bg-[var(--secondary)] rounded-full transition-colors" 
                            onClick={() => setDrop(false)}
                        >
                            <IoClose className="text-lg" />
                        </button>
                    </div>
                    
                    {cartItems.length > 0 ? (
                        <div className="space-y-3 max-h-64 overflow-y-auto">
                            {cartItems.map((item, i) => (
                                <div 
                                    key={item.id} 
                                    className={clsx(
                                        "flex items-center justify-between p-3",
                                        i !== cartItems.length - 1 && "border-b border-[var(--border)]"
                                    )}
                                >
                                    <div className="flex-1">
                                        <h3 className="font-medium">{item.name}</h3>
                                        <p className="text-sm">Course</p>
                                    </div>
                                    
                                    <div className="flex items-center gap-2">
                                        {/* Quantity Controls */}
                                        <div className="flex items-center gap-1">
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                                                className="p-1 rounded transition-transform cursor-pointer hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
                                                disabled={item.quantity <= 1}
                                            >
                                                <FaMinus className="text-xs" />
                                            </button>
                                            
                                            <span className="px-2 py-1 border border-[var(--border)] rounded text-sm font-medium min-w-[2rem] text-center">
                                                {item.quantity}
                                            </span>
                                            
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                                                className="p-1 rounded transition-transform cursor-pointer hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
                                                disabled={item.quantity >= 10}
                                            >
                                                <FaPlus className="text-xs" />
                                            </button>
                                        </div>
                                        
                                        {/* Remove Button */}
                                        <button
                                            onClick={() => handleRemoveItem(item.id)}
                                            className="p-1 rounded transition-transform cursor-pointer ml-2 hover:scale-110"
                                        >
                                            <FaTrash className="text-xs" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            
                            {/* Cart Summary */}
                            <div className="border-t border-[var(--border)] pt-3 mt-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-white">
                                        Total Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center h-32 text-center">
                            <FaCartShopping className="text-4xl mb-2" />
                            <h3 className="font-medium">Your cart is empty</h3>
                            <p className="text-sm">Add some courses to get started</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}