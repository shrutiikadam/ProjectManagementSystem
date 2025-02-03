import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClipboardList, FaEllipsisV } from 'react-icons/fa'; // Icons
import { FaUserCircle } from 'react-icons/fa'; // Profile icon
import { CardRotate } from './CardRotate';
import Modal from './Modal'; // Import Modal Component

export default function Stack({
  tasksData = [], // Array of tasks to display on cards
  sensitivity = 200,
  cardDimensions = { width: 300, height: 350 },
  animationConfig = { stiffness: 260, damping: 20 },
}) {
  const [cards, setCards] = useState(
    tasksData.length
      ? tasksData
      : [
          { id: 1, name: "Project A", category: "Development", progress: 50, startDate: "01-01-2025", endDate: "01-03-2025", teamMembersCount: 4 },
          { id: 2, name: "Project B", category: "Design", progress: 70, startDate: "02-01-2025", endDate: "02-06-2025", teamMembersCount: 6 },
          { id: 3, name: "Project C", category: "Research", progress: 30, startDate: "03-01-2025", endDate: "03-05-2025", teamMembersCount: 3 },
        ]
  );

  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility
  const [selectedCard, setSelectedCard] = useState(null); // State to hold the selected card details

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  // Function to open the modal
  const openModal = (card) => {
    setSelectedCard(card); // Set the selected card details
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => (
        <CardRotate
          key={card.id}
          onSendToBack={() => sendToBack(card.id)}
          sensitivity={sensitivity}
        >
          <motion.div
            className="absolute w-full h-full rounded-lg overflow-hidden bg-[#DAD2FF] border border-white shadow-lg"
            animate={{
              rotateZ: (cards.length - index - 1) * 4,
              scale: 1 + index * 0.06 - cards.length * 0.06,
              transformOrigin: "90% 90%",
            }}
            initial={false}
            transition={{
              type: "spring",
              stiffness: animationConfig.stiffness,
              damping: animationConfig.damping,
            }}
            style={{
              width: cardDimensions.width,
              height: cardDimensions.height,
            }}
          >
            {/* Card Content */}
            <div className="p-4 flex flex-col h-full">
              <div className="relative flex justify-between">
                <div className="text-xl font-semibold text-gray-800">{card.name}</div>
                {/* More Button */}
                <button className="absolute top-0 right-2 text-gray-500 hover:text-gray-700">
                  <FaEllipsisV />
                </button>
              </div>

              <div className="text-sm text-gray-500 mb-2">{card.category}</div>

              <div className="text-sm text-gray-600 mb-4 flex items-center">
                <FaCalendarAlt className="mr-2" />
                <span>{card.startDate} - {card.endDate}</span>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  className="bg-pink-200 h-2 rounded-full"
                  style={{ width: `${card.progress}%` }}
                ></div>
              </div>

              {/* Team Members */}
              <div className="flex items-center mb-4 text-sm text-gray-500">
                <div className="flex items-center space-x-[-22px]">
                  {Array.from({ length: Math.min(card.teamMembersCount, 2) }).map((_, index) => (
                    <div
                      key={index}
                      className={`w-10 h-10 bg-gray-400 rounded-full flex justify-center items-center text-white ${index > 0 ? '-ml-4' : ''}`}
                    >
                      <FaUserCircle className="w-9 h-9" />
                    </div>
                  ))}
                  {card.teamMembersCount > 2 && (
                    <span className="text-gray-600 pl-6">+{card.teamMembersCount - 2} more</span>
                  )}
                </div>
              </div>

              {/* View Details Button */}
              <button
                className="bg-trans text-black py-2 px-4 rounded-lg hover:bg-[#B2A5FF] transition border border-black"
                onClick={() => openModal(card)} // Open Modal on button click
              >
                <FaClipboardList className="mr-2 inline " />
                View Details
              </button>
            </div>
          </motion.div>
        </CardRotate>
      ))}

      {/* Full-Screen Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} cardDetails={selectedCard} />
    </div>
  );
}
