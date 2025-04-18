import React, { useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from './Hero';
import Footer from '../Footer/Footer';
import ClientInvoice from './clientInvoice';
import { toPng } from 'html-to-image';
import download from 'downloadjs';

const Invoice = () => {
  const invoiceRef = useRef(null);

  const handleDownload = async () => {
    if (invoiceRef.current === null) return;

    try {
      const dataUrl = await toPng(invoiceRef.current);
      download(dataUrl, 'invoice.png');
    } catch (error) {
      console.error('Error while generating invoice:', error);
    }
  };

  return (
    <div className=" flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Main content */}
      <div className="flex flex-col items-center py-10 space-y-10 px-4">
        <div
          ref={invoiceRef}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-md border border-gray-200"
        >
          <ClientInvoice />
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold"
        >
          Download Invoice
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Invoice;
