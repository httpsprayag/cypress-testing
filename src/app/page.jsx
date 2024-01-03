"use client";
export default function Home() {
  const handleClick = () => console.log("clicked....");
  return (
    <div className="p-3">
      <h2>Cypress testing</h2>
      <button
        datacy-id="btn"
        onClick={handleClick}
        className="bg-transparent hover:bg-slate-600 transition border mt-4 border-slate-100 p-3 rounded-md"
      >
        Click Me
      </button>
    </div>
  );
}
