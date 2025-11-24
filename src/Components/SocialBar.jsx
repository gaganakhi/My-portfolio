export default function SocialBar() {
    return (
      <div className="fixed left-2 top-1/3 flex flex-col gap-4 z-50">
        <a href="#" className="bg-orange-600 text-white p-3 rounded-md shadow hover:scale-110 transition">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="bg-gray-800 text-white p-3 rounded-md shadow hover:scale-110 transition">
          <i className="fab fa-github"></i>
        </a>
        <a href="#" className="bg-green-600 text-white p-3 rounded-md shadow hover:scale-110 transition">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    );
  }
  