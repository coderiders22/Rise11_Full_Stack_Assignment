import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [deviceType, setDeviceType] = useState('desktop'); // 'mobile', 'tablet', or 'desktop'

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType('mobile');
        setIsOpen(false);
      } else if (width >= 768 && width < 1024) {
        setDeviceType('tablet');
        setIsOpen(false);
      } else {
        setDeviceType('desktop');
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Tablet-specific menu items component
  const TabletMenuBar = () => (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 lg:hidden">
      <div className="grid h-full max-w-lg grid-cols-6 mx-auto">
        <a href="#" className="flex flex-col items-center justify-center">
          <img src="/images/dashboard.png" alt="Dashboard" className="w-6 h-6" />
          <span className="text-xs text-gray-600">Dashboard</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center">
          <img src="/images/case.png" alt="Cases" className="w-6 h-6" />
          <span className="text-xs text-gray-600">Cases</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center">
          <img src="/images/activity.png" alt="Activities" className="w-6 h-6" />
          <span className="text-xs text-gray-600">Activities</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center">
          <img src="/images/calender.png" alt="Calendar" className="w-6 h-6" />
          <span className="text-xs text-gray-600">Calendar</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center">
          <img src="/images/files.png" alt="Files" className="w-6 h-6" />
          <span className="text-xs text-gray-600">Files</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center">
          <img src="/images/dispute.png" alt="Dispute" className="w-6 h-6" />
          <span className="text-xs text-gray-600">Dispute</span>
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* Top Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              {(deviceType === 'mobile' || deviceType === 'tablet') && (
                <button
                  onClick={toggleSidebar}
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-label="Toggle Sidebar"
                >
                  {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
              )}
              <div className="flex ml-2 md:mr-24">
                <img src="/images/logo.png" className="h-12 w-36" alt="Logo" />
                <span className="self-center text-xl font-semibold"></span>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <button className="flex text-sm bg-gray-100 rounded-full focus:ring-4 focus:ring-gray-300">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/images/notification.png"
                    alt="user photo"
                  />
                </button>
                <button className="flex text-sm bg-gray-100 rounded-full focus:ring-4 focus:ring-gray-300">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/images/account.png"
                    alt="user photo"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile and tablet */}
      {(deviceType !== 'desktop' && isOpen) && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen bg-white transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          ${deviceType !== 'desktop' ? 'w-64' : 'w-64'}
          ${deviceType !== 'desktop' ? 'pt-16' : 'pt-20'}
          border-r border-gray-200`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <img src="/images/dashboard.png" alt="Dashboard" className="w-8 h-9" />
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <img src="/images/case.png" alt="My Cases" className="w-8 h-9" />
                <span className="flex-1 ml-3 whitespace-nowrap">My Cases</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <img src="/images/activity.png" alt="Activities" className="w-8 h-9" />
                <span className="flex-1 ml-3 whitespace-nowrap">Activities</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <img src="/images/calender.png" alt="Calendar" className="w-8 h-9" />
                <span className="flex-1 ml-3 whitespace-nowrap">Calendar</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <img src="/images/files.png" alt="Users" className="w-8 h-9" />
                <span className="flex-1 ml-3 whitespace-nowrap">Files</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <img src="/images/dispute.png" alt="Files" className="w-8 h-9" />
                <span className="flex-1 ml-3 whitespace-nowrap">Open a Dispute</span>
              </a>
            </li>
          </ul>

          {/* Justice Banner */}
          <div className="mt-6 mx-2">
            <div className="bg-blue-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-2"></h3>
              <img 
                src="/images/banner.png" 
                alt="Justice Banner"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </aside>

  
    </>
  );
};

export default Sidebar;