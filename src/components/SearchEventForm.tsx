// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SearchEventForm = ({ events }: { events: Event[] }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [category, setCategory] = useState("All");
//   const [date, setDate] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     const filteredEvent = events.find(
//       (event) =>
//         event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (category === "All" || event.category === category) &&
//         (!date ||
//           new Date(event.date).toDateString() === new Date(date).toDateString())
//     );

//     if (filteredEvent) {
//       navigate(`/events/${filteredEvent.id}`);
//     } else {
//       alert("No matching event found.");
//     }
//   };

//   return (
//     <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-4 rounded-md shadow-md">
//       <input
//         type="text"
//         placeholder="Search by title..."
//         className="border px-3 py-2 rounded w-full sm:w-60"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <select
//         className="border px-3 py-2 rounded"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//       >
//         <option value="All">All Categories</option>
//         <option value="Tech">Tech</option>
//         <option value="Music">Music</option>
//         <option value="Art">Art</option>
//         {/* Add categories as needed */}
//       </select>
//       <input
//         type="date"
//         className="border px-3 py-2 rounded"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//       />
//       <button
//         onClick={handleSearch}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchEventForm;
