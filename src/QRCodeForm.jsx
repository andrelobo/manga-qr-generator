import React, { useState } from 'react';
import QRCodeDisplay from './QRCodeDisplay';

const QRCodeForm = () => {
  const [link, setLink] = useState('');
  const [qrCodeValue, setQrCodeValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQrCodeValue(link);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-darkBlue-800 rounded-lg shadow-md h-screen flex flex-col justify-center">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="link" className="block text-sm font-medium text-lightBlue">Insira o Link:</label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="mt-1 block w-full p-2 bg-darkBlue-900 border border-darkBlue-700 rounded-md text-lightBlue placeholder-gray-500"
            placeholder="https://exemplo.com"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-lightBlue text-darkBlue-900 py-2 px-4 rounded-md hover:bg-lightBlue-600"
        >
          Gerar QR Code
        </button>
      </form>
      {qrCodeValue && <QRCodeDisplay value={qrCodeValue} />}
    </div>
  );
};

export default QRCodeForm;
