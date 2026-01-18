const RegistrationFees = () => {
  return (
    <div className="inter overflow-x-auto py-1">
      <table className="w-full text-sm text-center border border-gray-300">
        <thead className="text-gray-900">
          <tr className="bg-[#7292D1] text-white">
            <th colSpan={10} className="text-lg p-2 border border-white">ReACS 2026, ABV-IIITM Gwalior (with GST)</th>
          </tr>
          <tr className="bg-[#9CC2D8]">
            <th colSpan={10} className="p-2 border border-white">Indian Delegates (INR)</th>
          </tr>
          <tr className="bg-[#7BCFB3]">
            <th className="p-2 border border-white">Category</th>
            <th colSpan={4} className="border border-white">Early Bird Registration</th>
            <th colSpan={4} className="border border-white">Registration</th>
          </tr>
          <tr className="bg-[#94E4CC]">
            <th className="p-2 border border-white bg-[#7BCFB3]"></th>
            <th colSpan={2} className="p-2 border border-white">Academia/Professionals</th>
            <th colSpan={2} className="p-2 border border-white">Students (10% Deduction)</th>
            <th colSpan={2} className="p-2 border border-white">Academia/Professionals</th>
            <th colSpan={2} className="p-2 border border-white">Students (10% Deduction)</th>
          </tr>
          <tr className="bg-[#94E4CC]">
            <th className="p-2 border border-white bg-[#7BCFB3]"></th>
            <th className="p-2 border border-white">IEEE</th>
            <th className="p-2 border border-white">Non IEEE</th>
            <th className="p-2 border border-white">IEEE</th>
            <th className="p-2 border border-white">Non IEEE</th>
            <th className="p-2 border border-white">IEEE</th>
            <th className="p-2 border border-white">Non IEEE</th>
            <th className="p-2 border border-white">IEEE</th>
            <th className="p-2 border border-white">Non IEEE</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#C3D6D0]">
            <td className="p-2 border border-white bg-[#7BCFB3] font-semibold">Presenter</td>
            <td className="p-2 border border-white">7080</td>
            <td className="p-2 border border-white">8260</td>
            <td className="p-2 border border-white">6372</td>
            <td className="p-2 border border-white">7434</td>
            <td className="p-2 border border-white">8260</td>
            <td className="p-2 border border-white">9440</td>
            <td className="p-2 border border-white">7434</td>
            <td className="p-2 border border-white">8496</td>
          </tr>
          <tr className="bg-[#C3D6D0]">
            <td className="p-2 border border-white bg-[#7BCFB3] font-semibold">Listener</td>
            <td className="p-2 border border-white">2950</td>
            <td className="p-2 border border-white">4130</td>
            <td className="p-2 border border-white">2655</td>
            <td className="p-2 border border-white">3717</td>
            <td className="p-2 border border-white">4130</td>
            <td className="p-2 border border-white">5310</td>
            <td className="p-2 border border-white">3717</td>
            <td className="p-2 border border-white">4779</td>
          </tr>
          <tr className="bg-[#9CC2D8]">
            <th colSpan={10} className="p-2 border border-white">Foreign Delegates (US $)</th>
          </tr>
          <tr className="bg-[#C3D6D0]">
            <td className="p-2 border border-white bg-[#7BCFB3] font-semibold">Presenter</td>
            <td className="p-2 border border-white" colSpan={1}>236</td>
            <td className="p-2 border border-white" colSpan={1}>295</td>
            <td className="p-2 border border-white" colSpan={1}>177</td>
            <td className="p-2 border border-white" colSpan={1}>206.5</td>
            <td className="p-2 border border-white" colSpan={1}>295</td>
            <td className="p-2 border border-white" colSpan={1}>354</td>
            <td className="p-2 border border-white" colSpan={1}>236</td>
            <td className="p-2 border border-white" colSpan={1}>295</td>
          </tr>
          <tr className="bg-[#C3D6D0]">
            <td className="p-2 border border-white bg-[#7BCFB3] font-semibold">Listener</td>
            <td className="p-2 border border-white" colSpan={1}>118</td>
            <td className="p-2 border border-white" colSpan={1}>177</td>
            <td className="p-2 border border-white" colSpan={1}>88.5</td>
            <td className="p-2 border border-white" colSpan={1}>118</td>
            <td className="p-2 border border-white" colSpan={1}>118</td>
            <td className="p-2 border border-white" colSpan={1}>177</td>
            <td className="p-2 border border-white" colSpan={1}>88.5</td>
            <td className="p-2 border border-white" colSpan={1}>118</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RegistrationFees;
