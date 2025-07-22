// ArticlePage.jsx
import React from "react";
// import scamImg from "../assets/scammer.jpg";
// import arrestImg from "../assets/arrest-news.png"; // Screenshot from Telangana Today

const ArticlePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 font-serif text-[#111827] bg-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
        Fake Job Offers Targeting Rural Youth: A New Wave of Digital Exploitation
      </h1>
      <p className="text-sm text-gray-500 mb-6">By Investigative Desk | July 22, 2025</p>

      <img src='images/Pavan scam.jpg' alt="Mr. Mandru Pavan Kumar" className="w-full h-auto mb-6 rounded shadow-md" />

      <p className="mb-4">
        <strong>Nidadavole, Andhra Pradesh</strong> – A growing number of job seekers, especially from
        villages and small towns, are falling victim to false promises of employment from fraudulent
        consultancy agents. According to sources, these scammers ask for initial payments between ₹5,000
        to ₹25,000 and offer fake placement letters.
      </p>

      <p className="mb-4">
        Victims report long waiting periods without job confirmation, communication blackouts, and
        complete disappearance of the so-called consultants. Intelligence groups suggest a pattern
        involving unauthorized agencies and digital marketing tie-ups to target vulnerable individuals.
      </p>

      <p className="mb-4">
        <em>“I paid ₹10,000 for an MNC job opportunity. Eight months later, I got blocked,”</em> says a
        candidate from Markondapadu. Reports also highlight that scam operators often reuse names,
        phone numbers, and set up temporary WhatsApp groups to create a sense of legitimacy.
      </p>

      <img src='images/ponaganti.jpg' alt="News Screenshot - Ponaganti Sai Teja Arrest" className="w-full mb-6 rounded shadow-md" />

      <p className="mb-4">
        According to a <a href="https://telanganatoday.com" target="_blank" className="text-blue-600 underline">Telangana Today</a> report dated July 5, 2024, an individual named <strong>Ponaganti Sai Teja</strong> (28) from Eluru was arrested in Warangal for allegedly cheating unemployed youth with false job promises. The report details that he collected money from job aspirants without fulfilling his commitments.
      </p>

      <p className="mb-4">
        Sources and victims allege that <strong>Mr. Mandru Pavan Kumar</strong> is linked to this network, working alongside Sai Teja and similar individuals to defraud candidates. Victims claim he initially engages them via unofficial consultancies, collects an “initial process fee,” and then disappears or blocks communication entirely.
      </p>

      <p className="mb-4">
        His operations reportedly target people from villages and small towns, leveraging their desperation for jobs to extract money with no legitimate placement offers. Multiple reports suggest he collaborates with individuals already involved in employment scams, using digital marketing hype and fake references to win trust.
      </p>

      <p className="text-red-600 font-semibold">
        ⚠️ If you've been contacted by or paid money to Mr. Mandru Pavan Kumar or any associate of Ponaganti Sai Teja, please report it at <a href="https://cybercrime.gov.in" className="underline">cybercrime.gov.in</a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">How to Stay Safe</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Verify consultancies through official platforms like Naukri or LinkedIn.</li>
        <li>Do not pay large upfront fees without contracts.</li>
        <li>Ask for GST registration, company CIN, and reference clients.</li>
        <li>Report frauds to <a href="https://www.cybercrime.gov.in" className="text-blue-600 underline">cybercrime.gov.in</a>.</li>
      </ul>

      <p className="mt-8 text-red-600 font-bold">
        Stay alert. Protect yourself and your loved ones from employment scams.
      </p>
    </div>
  );
};

export default ArticlePage;