import React, { useRef } from "react";
import ticketImage from "../../assets/products/gswVsGr.jpeg";
import QRCode from "react-qr-code";

export default function Ticket({
  ticketId = "EVT123456",
  eventId = "EV2025",
  eventName = "Techno Night 2025",
  date = "2025-06-22",
  heure = "21:00",
  isValid = true,
}) {
  const ticketRef = useRef();

  const ticketInfo = {
    eventName,
    eventId,
    ticketId,
    date,
    heure,
  };

  const qrValue = JSON.stringify(ticketInfo);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="flex justify-end mb-4 no-print">
        <button
          onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          Print Ticket
        </button>
      </div>

      <div
        ref={ticketRef}
        className="max-w-4xl mx-auto flex flex-col sm:flex-row bg-white shadow-lg rounded-lg overflow-hidden border print:shadow-none print:border-none print:m-0 print:w-full"
      >
        {/* Left Panel */}
        <div className="bg-gray-100 p-4 w-full sm:w-1/3">
          <h2 className="text-sm font-semibold text-indigo-600">{eventName}</h2>
          <p className="text-gray-700 mt-1">
            DJ Harry Cartwright, USA<br />
            DJ Faith Hanson, UK
          </p>
          <p className="mt-4 text-lg font-bold">{date}</p>
          <p className="text-sm text-gray-600">DOOR OPEN {heure}</p>
          <div className="mt-6">
            <p className="text-sm text-gray-600">Ticket Price</p>
            <p className="text-2xl font-bold">$50</p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full sm:w-1/3 h-48 sm:h-auto">
          <img
            src={ticketImage}
            alt="event"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Panel */}
        <div className="bg-gradient-to-r from-purple-700 to-blue-600 text-white p-4 w-full sm:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-semibold">{eventName}</h2>
            <p className="text-sm mt-2">VIP: $20 ENTRY PASS</p>
            <p className="text-sm">Night Show</p>
            <p className="text-sm">Couple Entry</p>
          </div>

          <div className="bg-white p-3 mt-4 rounded flex flex-col items-center justify-center space-y-2">
            <QRCode value={qrValue} size={100} />
            <p className="text-xs text-center text-black">
              EVENT TICKET 2025
            </p>
            <span
              className={`text-xs font-bold px-2 py-1 rounded ${
                isValid
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {isValid ? "VALID TICKET" : "INVALID"}
            </span>
          </div>
        </div>
      </div>

      {/* Hide non-ticket content on print */}
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
