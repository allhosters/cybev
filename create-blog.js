import { useState } from "react";

export default function CreateBlog() {
  const [domainType, setDomainType] = useState("subdomain");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <header className="flex justify-between items-center mb-8">
        <a href="/" className="text-2xl font-bold text-blue-800 hover:underline">CYBEV</a>
        <nav className="space-x-4">
          <a href="/" className="text-sm text-blue-600 hover:underline">Home</a>
          <a href="/join-timeline" className="text-sm text-blue-600 hover:underline">Join Timeline</a>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-blue-800">Create Your Blog</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold">Blog Title</label>
            <input type="text" className="w-full mt-1 border px-4 py-2 rounded" placeholder="Enter blog title" />
          </div>

          <div>
            <label className="block text-sm font-semibold">Blog Description</label>
            <textarea className="w-full mt-1 border px-4 py-2 rounded" rows="3" placeholder="Short description..."></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Choose Domain Type</label>
            <select value={domainType} onChange={e => setDomainType(e.target.value)} className="w-full border px-4 py-2 rounded">
              <option value="subdomain">Use a CYBEV Subdomain</option>
              <option value="custom">Use My Custom Domain</option>
              <option value="register">Register a New Domain</option>
            </select>
          </div>

          {domainType === "subdomain" && (
            <div>
              <label className="block text-sm font-semibold">Enter Subdomain</label>
              <input type="text" className="w-full mt-1 border px-4 py-2 rounded" placeholder="yourname.cybev.com" />
            </div>
          )}

          {domainType === "custom" && (
            <div>
              <label className="block text-sm font-semibold">Custom Domain</label>
              <input type="text" className="w-full mt-1 border px-4 py-2 rounded" placeholder="yourcustomdomain.com" />
            </div>
          )}

          {domainType === "register" && (
            <div>
              <label className="block text-sm font-semibold">Search Domain to Register</label>
              <input type="text" className="w-full mt-1 border px-4 py-2 rounded" placeholder="searchnewdomain.com" />
              <p className="text-sm text-gray-500 mt-1">We'll check availability and register it via DomainNameAPI or Namecheap.</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold">Category</label>
            <select className="w-full border px-4 py-2 rounded">
              <option>Christianity</option>
              <option>Church</option>
              <option>Religion</option>
              <option>Tech</option>
              <option>Music</option>
              <option>Education</option>
              <option>Health</option>
              <option>Fashion</option>
              <option>OTHERS</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold">Niche</label>
            <input type="text" className="w-full mt-1 border px-4 py-2 rounded" placeholder="Specify niche or type..." />
          </div>

          <button type="submit" className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900">Submit</button>
        </form>
      </main>
    </div>
  );
}
