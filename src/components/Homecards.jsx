import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const Homecards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">For Trainers</h2>
            <p className="mt-2 mb-4">
              Choose your favorite type
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Types
            </Link>
          </Card>
          <Card bg='bg-[#b2f657]'>
            <h2 className="text-2xl font-bold">For Pokemons</h2>
            <p className="mt-2 mb-4">
              Choose your favorite starter
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-[#5bad2a] text-white rounded-lg px-4 py-2 hover:bg-[#4a961d]"
            >
              Choose Starter
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Homecards