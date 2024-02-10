import React from 'react';
import Navbar from '../components/Navbar';


const Dashboard = () => {
  return (
    
    <div className="h-screen w-screen bg-gray-100">
        <Navbar/>
      <div className="h-[30%] w-screen">
        <div className="h-full w-full bg-green-400">image is here</div>
      </div>
      <div className="h-[8%] w-screen bg-black p-2">
        <div className="flex justify-between px-5">
          <div>
            <input type="text" placeholder="Name" className="mr-4 rounded-md border border-gray-300 px-4 py-2" />
            <select className="mr-4 rounded-md border border-gray-300 px-4 py-2">
              <option value="1">Person 1</option>
              <option value="2">Person 2</option>
              <option value="3">Person 3</option>
            </select>
            <button className="rounded-md bg-blue-400 px-4 py-2 text-white">Search</button>
          </div>
        </div>
      </div>
      <div className="w-screen p-5">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-400 p-4">
            <div className="card">
              <div className="card-img-top" style={{ backgroundColor: '#ccc', height: '200px' }}></div>
              <div className="card-body">
                <h5 className="card-title mt-2">John Doe</h5>
                <p className="card-text">Location: New York</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-400 p-4">
            <div className="card">
              <div className="card-img-top" style={{ backgroundColor: '#ccc', height: '200px' }}></div>
              <div className="card-body">
                <h5 className="card-title mt-2">John Doe</h5>
                <p className="card-text">Location: New York</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-400 p-4">
            <div className="card">
              <div className="card-img-top" style={{ backgroundColor: '#ccc', height: '200px' }}></div>
              <div className="card-body">
                <h5 className="card-title mt-2">John Doe</h5>
                <p className="card-text">Location: New York</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
