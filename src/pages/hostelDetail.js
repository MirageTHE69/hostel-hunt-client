import React from 'react';

const HostelDetailPage = () => {
  return (
    <div className="w-screen h-screen p-10">
      <div className="w-full h-auto bg-red-600 p-3 rounded-xl">
        <div className="w-full h-56 bg-black rounded-xl"></div>
        <div className="mt-3 font-bold text-xl">Hostel Name</div>
        <div className="mt-3 font-semibold">Hostel Location</div>
        <div className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia.
        </div>
      </div>
      <div className="p-5">
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

export default HostelDetailPage;
