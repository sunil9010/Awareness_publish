const images = [
  { src: '/fake-offer1.jpg', caption: 'Fake MNC Offer Letter' },
  { src: '/scam-chat1.jpg', caption: 'WhatsApp Scam Conversation' },
];

const EvidenceGallery = () => (
  <div className="max-w-5xl mx-auto p-6 grid gap-6 grid-cols-1 md:grid-cols-2">
    {images.map((img, idx) => (
      <div key={idx} className="bg-white shadow rounded overflow-hidden">
        <img src={img.src} alt={img.caption} className="w-full h-auto" />
        <div className="p-3 text-sm text-gray-700">{img.caption}</div>
      </div>
    ))}
  </div>
);

export default EvidenceGallery