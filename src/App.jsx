import { fetchPhotos, fetchVideos, fetchGIF } from "./api/mediaApi";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex gap-4">
        <button
          onClick={async () => {
            const data = await fetchPhotos("cat");
            console.log(data.results);
          }}
          className="
            px-6 py-3 rounded-lg
            bg-blue-600 text-white font-semibold
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            active:scale-95
            transition-all duration-200
          "
        >
          📸 Get Photos
        </button>

        <button
          onClick={async () => {
            const data = await fetchVideos("cat");
            console.log(data.videos);
          }}
          className="
            px-6 py-3 rounded-lg
            bg-green-600 text-white font-semibold
            shadow-md
            hover:bg-green-700 hover:shadow-lg
            active:scale-95
            transition-all duration-200
          "
        >
          🎥 Get Videos
        </button>

        <button
          onClick={async () => {
            const data = await fetchGIF("cat");
            console.log(data.results);
          }}
          className="
            px-6 py-3 rounded-lg
            bg-purple-600 text-white font-semibold
            shadow-md
            hover:bg-purple-700 hover:shadow-lg
            active:scale-95
            transition-all duration-200
          "
        >
          🎞️ Get GIF
        </button>
      </div>
    </div>
  );
};

export default App;
