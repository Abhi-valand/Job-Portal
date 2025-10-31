import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const JobDescription = () => {

    const isApllied = true

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>Frontend Developer</h1>
                    <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="secondary" className="text-blue-700 bg-blue-100">
                            12 Positions
                        </Badge>
                        <Badge variant="secondary" className="text-[#F83002] bg-red-100">
                            Part Time
                        </Badge>
                        <Badge variant="secondary" className="text-[#7209b7] bg-purple-100">
                            24 LPA
                        </Badge>
                    </div>
                </div>
                <Button
                    disabled={isApllied}
                    className={`rounded-full ${isApllied ? 'bg-gray-600' : 'bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md'}`}>
                    {isApllied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div className='my-4'>
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>Frontend Developer</span> </h1>
                <h1 className='font-bold my-1'>Loaction: <span className='pl-4 font-normal text-gray-800'>Ahmedabad</span> </h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, aut exercitationem fugit illum praesentium corrupti.</span> </h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>2 years</span> </h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>24LPA</span> </h1>
                <h1 className='font-bold my-1'>Toatl Applicants: <span className='pl-4 font-normal text-gray-800'>7</span> </h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>17/08/2025</span> </h1>
            </div>
        </div>
    )
}

export default JobDescription
