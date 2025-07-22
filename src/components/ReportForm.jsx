const ReportForm = () => (
  <div className="max-w-2xl mx-auto bg-white p-8 shadow mt-10">
    <h2 className="text-2xl font-bold mb-4">Report a Job Scam</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
      <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
      <textarea placeholder="Describe the scam..." rows={5} className="w-full border p-2 rounded"></textarea>
      <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  </div>
);


export default ReportForm