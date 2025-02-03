import React from "react";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

export default function Modal({ isOpen, onClose, cardDetails }) {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-4 mt-4 border border-pink-400 w-full h-full relative overflow-y-auto max-w-4xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-red-500 hover:text-gray-600 focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          <XCircle className="h-8 w-8" />
        </button>

        {/* Modal Content */}
        <h2 className="text-xl font-semibold mb-6 text-center text-black philosopher-regular">
          {cardDetails.name}
        </h2>
        <div className="space-y-4 text-gray-700 text-sm philosopher-regular">
          <p>
            <strong>Category:</strong> {cardDetails.category}
          </p>
          <p>
            <strong>Progress:</strong> {cardDetails.progress}%
          </p>
          <p>
            <strong>Start Date:</strong> {cardDetails.startDate}
          </p>
          <p>
            <strong>Deadline:</strong> {cardDetails.endDate}
          </p>
          <p>
            <strong>Team Members:</strong> {cardDetails.teamMembersCount}
          </p>
          <p>
            <strong>Description:</strong> {cardDetails.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
