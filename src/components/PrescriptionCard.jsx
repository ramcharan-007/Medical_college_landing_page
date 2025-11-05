import { motion } from "framer-motion";
import { ClipboardCheck, Stethoscope, CalendarDays, Pill, FileText } from "lucide-react";

const PrescriptionCard = ({ term }) => {
  return (
    <motion.div
      className="max-w-3xl bg-white shadow-md rounded-2xl border border-blue-200 p-6 relative overflow-hidden hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      {/* Watermark */}
      <div className="absolute inset-0 opacity-5 bg-[url('/medical-symbol.svg')] bg-center bg-no-repeat"></div>

      {/* Header */}
      <div className="flex justify-between items-center border-b border-blue-100 pb-3 mb-4">
        <div className="flex items-center gap-2 text-blue-600 font-semibold text-xl">
          <Stethoscope className="w-6 h-6" />
          <span>Prescription Sheet</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <CalendarDays className="w-5 h-5" />
          <span>{term.duration}</span>
        </div>
      </div>

      {/* Patient Details */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-2">🧾 Patient Details</h3>
        <div className="grid grid-cols-2 gap-y-1 text-gray-700 text-sm">
          <p><strong>Name:</strong> {term.student}</p>
          <p><strong>Age:</strong> {term.age}</p>
          <p><strong>Condition:</strong> {term.condition}</p>
          <p><strong>Prescribed By:</strong> Dr. {term.prescribedBy}</p>
        </div>
      </div>

      {/* Diagnosis Table */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-2">🧬 Diagnosis (Subjects)</h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-blue-100 text-sm">
            <thead className="bg-blue-50 text-blue-700">
              <tr>
                <th className="p-2 text-left">Code</th>
                <th className="p-2 text-left">Subject</th>
                <th className="p-2 text-left">Focus Area</th>
              </tr>
            </thead>
            <tbody>
              {term.subjects.map((subj, i) => (
                <tr key={i} className="border-t border-blue-50 hover:bg-blue-50/50">
                  <td className="p-2">{subj.code}</td>
                  <td className="p-2">{subj.name}</td>
                  <td className="p-2">{subj.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Prescription Section */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <Pill className="w-5 h-5 text-blue-500" /> Prescription (Learning Plan)
        </h3>
        <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
          {term.prescription.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-2">📋 Instructions</h3>
        <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700 italic">
          {term.instructions}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-blue-100 pt-3 text-sm text-gray-600">
        <p><FileText className="inline-block w-4 h-4 mr-1" /> Next Appointment: <strong>{term.nextTerm}</strong></p>
        <p className="font-medium text-blue-600 flex items-center gap-1">
          <ClipboardCheck className="w-4 h-4" /> Follow-up: {term.review}
        </p>
      </div>
    </motion.div>
  );
};

export default PrescriptionCard;
