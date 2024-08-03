'use client'

import { useState, useEffect } from 'react'
import { firestore } from '@/firebase'
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  deleteDoc,
  getDoc,
} from 'firebase/firestore'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Home() {
  const [inventory, setInventory] = useState([])
  const [open, setOpen] = useState(false)
  const [itemName, setItemName] = useState('')
  const [hasMore, setHasMore] = useState(true)

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'))
    const docs = await getDocs(snapshot)
    const inventoryList = []
    docs.forEach((doc) => {
      inventoryList.push({ name: doc.id, ...doc.data() })
    })
    setInventory(inventoryList)
  }
  const addItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const { quantity } = docSnap.data()
      await setDoc(docRef, { quantity: quantity + 1 })
    } else {
      await setDoc(docRef, { quantity: 1 })
    }
    await updateInventory()
  }
  
  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const { quantity } = docSnap.data()
      if (quantity === 1) {
        await deleteDoc(docRef)
      } else {
        await setDoc(docRef, { quantity: quantity - 1 })
      }
    }
    await updateInventory()
  }
  
  useEffect(() => {
    updateInventory()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (itemName.trim() !== '') {
      addItem(itemName)
      setItemName('')
    }
  }

  const fetchMoreData = () => {
    if (inventory.length >= 50) { 
      setHasMore(false)
      return
    }
    setTimeout(() => {
      updateInventory()
    }, 1500)
  }
 
  return (
    <div className="flex flex-col min-h-screen bg-orange-200 font-mono">
      
      <div className="w-full fixed top-0 bg-orange-200 z-10 flex justify-center items-center p-4">
        <div className="max-w-3xl w-full flex justify-center">
          <h1 className="text-4xl text-center p-5 text-amber-950">pantry tracker</h1>
        </div>
      </div>

      <div className="w-full flex justify-center mt-32 px-4 md:px-8 pb-10">
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 flex">
          <input
            type="text"
            placeholder="add items...."
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-l-md shadow-sm text-gray-800"
          />
          <button
            type="submit"
            className="bg-amber-800 text-white p-2 rounded-r-md shadow-md">add it!</button>
        </form>
      </div>

      <div className="flex-grow flex flex-col items-center mt-4 px-4 md:px-8 pb-5">
        <div className="bg-white w-full max-w-6xl h-96 flex flex-col items-center shadow-md p-5 overflow-hidden">
          <p className="text-center mb-4 text-amber-950">your pantry</p>
          <div className="bg-orange-100 w-full h-full overflow-auto">
            <InfiniteScroll
              dataLength={inventory.length}
              next={fetchMoreData}
              hasMore={hasMore}
              className="w-full"
            >
              {inventory.length === 0 ? (
                <p className="text-gray-600 text-center mt-4">No items in pantry.</p>
              ) : (
                inventory.map((item) => (
                  <div key={item.name} className="flex justify-between px-4 py-1 border-b border-gray-200">
                    <span className="text-gray-800">{item.name} (Quantity: {item.quantity})</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => addItem(item.name)}
                        className="bg-white px-2 py-1 rounded">
                        ➕
                      </button>
                      <button
                        onClick={() => removeItem(item.name)}
                        className="bg-white px-2 py-1 rounded">
                        ❌
                      </button>
                    </div>
                  </div>
                ))
              )}
            </InfiniteScroll>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-4">
          <button
            className="bg-amber-900 text-white px-4 py-2 rounded shadow-md">
            Find Recipe!
          </button>
      </div>
      

      <footer className="bg-orange-200 text-center py-4 pt-10">
        <p className="text-amber-950 text-sm">
          &copy; {new Date().getFullYear()} Arushi Singh. All rights reserved.
        </p>
        <p className="text-amber-950 text-xs mt-1">Made with love and NextJS, Firebase and Tailwind CSS. Integrates OpenAI to find recipes :)</p>
      </footer>
    </div>
  );
}
