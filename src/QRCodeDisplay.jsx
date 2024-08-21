import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeDisplay = ({ value }) => {
  return (
    <div className="flex justify-center items-center mt-8 h-full">
      <QRCode
        value={value}
        size={256} // Ajuste o tamanho do QR Code conforme necessário
        className="border border-gray-300 rounded-lg p-2 bg-white"
      />
    </div>
  );
};

export default QRCodeDisplay;
