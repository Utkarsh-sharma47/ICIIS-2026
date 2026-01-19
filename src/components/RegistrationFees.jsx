import React from 'react';

const RegistrationFees = () => {
  return (
    <div className="font-sans antialiased py-8 px-4 w-full flex justify-center">
      <div className="w-full max-w-5xl overflow-x-auto shadow-xl rounded-lg bg-white">
        
        {/* Header Section */}
        <div className="bg-[#1e3a8a] text-white text-center py-5 rounded-t-lg">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide">Registration Fees Details</h2>
        </div>

        <table className="w-full text-sm md:text-base text-center border-collapse">
          <thead>
            {/* Column Headers */}
            <tr className="bg-slate-50 text-slate-800 font-bold uppercase tracking-wider text-xs md:text-sm border-b-2 border-slate-200">
              <th className="p-5 w-1/3">Category</th>
              <th className="p-5 w-1/3 border-l border-slate-200">Early Bird</th>
              <th className="p-5 w-1/3 border-l border-slate-200">Regular</th>
            </tr>
          </thead>
          
          <tbody className="text-gray-700 font-medium">
            {/* Row 1: IEEE Member */}
            <tr className="hover:bg-blue-50 transition-colors border-b border-gray-100">
              <td className="p-5 text-left pl-8 font-bold text-slate-800">
                IEEE Member
              </td>
              <td className="p-5 border-l border-gray-100">₹ 1,200</td>
              <td className="p-5 border-l border-gray-100">₹ 1,500</td>
            </tr>

            {/* Row 2: Non-Member */}
            <tr className="hover:bg-blue-50 transition-colors border-b border-gray-100">
              <td className="p-5 text-left pl-8 font-bold text-slate-800">
                Non-Member
              </td>
              <td className="p-5 border-l border-gray-100">₹ 1,500</td>
              <td className="p-5 border-l border-gray-100">₹ 1,800</td>
            </tr>

            {/* Row 3: Student (IEEE) */}
            <tr className="hover:bg-blue-50 transition-colors border-b border-gray-100">
              <td className="p-5 text-left pl-8 font-bold text-slate-800">
                Student (IEEE)
              </td>
              <td className="p-5 border-l border-gray-100">₹ 600</td>
              <td className="p-5 border-l border-gray-100">₹ 800</td>
            </tr>

            {/* Row 4: Student (Non-IEEE) */}
            <tr className="hover:bg-blue-50 transition-colors border-b border-gray-100">
              <td className="p-5 text-left pl-8 font-bold text-slate-800">
                Student (Non-IEEE)
              </td>
              <td className="p-5 border-l border-gray-100">₹ 800</td>
              <td className="p-5 border-l border-gray-100">₹ 1,000</td>
            </tr>

            {/* Row 5: Industry Delegate */}
            <tr className="hover:bg-blue-50 transition-colors border-b border-gray-100">
              <td className="p-5 text-left pl-8 font-bold text-slate-800">
                Industry Delegate
              </td>
              <td className="p-5 border-l border-gray-100">₹ 1,800</td>
              <td className="p-5 border-l border-gray-100">₹ 2,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistrationFees;