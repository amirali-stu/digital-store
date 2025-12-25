import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { TiUserOutline } from "react-icons/ti";

function TVItem() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="w-[348px] h-[311px] group transition-all duration-300 hover:-translate-y-2 cursor-pointer rounded-4xl border border-Neutral-50 shadow-[0px_4px_15px_0px] shadow-black/4 p-4 bg-white">
      <div className="w-full h-[203px] relative rounded-2xl overflow-hidden">
        {/* Video */}
        <video
          ref={videoRef}
          src="videos/test.mp4"
          poster="images/product/cover.jpg"
          className="w-full h-full object-cover"
        />

        {/* Play Overlay */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                <FaPlay size={14} />
              </div>
            </div>
          </button>
        )}
      </div>

      <div className="space-y-4 mt-2">
        <h3 className="text-sm text-Neutral-800">نقد و بررسی ایرپاد</h3>

        <div className="w-full flex items-center justify-between mb-5">
          <div className="text-Neutral-300 flex items-center gap-x-1">
            <TiUserOutline size={24} />
            <span className="mt-1">نیلوفر وفایی</span>
          </div>

          <div className="text-Neutral-300 flex items-center gap-x-1 font-sans-medium text-center">
            <span className="mt-1">2024/09/22</span>
            <LuCalendarDays size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TVItem;
