import { useRef } from "react";

type Props = {
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ImageUpload = ({ onUpload }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex items-center justify-center w-full">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onUpload}
        className="hidden"
      />

      <div
        onClick={handleClick}
        className="cursor-pointer border-2 border-dashed border-gray-400 rounded-2xl p-8 w-72 h-44 flex flex-col items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
      >
        <span className="text-4xl">📷</span>
        <p className="mt-2 text-gray-600 font-medium">
          Click to upload image
        </p>
        <p className="text-sm text-gray-400">
          PNG, JPG, JPEG
        </p>
      </div>
    </div>
  );
};

export default ImageUpload;