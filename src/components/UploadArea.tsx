import { Upload } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export const UploadArea = () => {
  const [isDragging, setIsDragging] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload logic here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
  });

  return (
    <div
      {...getRootProps()}
      className={`upload-area cursor-pointer animate-fade-in ${
        isDragging ? "border-primary bg-primary/5" : ""
      }`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center text-center">
        <Upload className="w-12 h-12 text-gray-400 mb-4" />
        <p className="text-lg font-medium mb-2">
          Drag and drop files here or <span className="text-primary">Select File</span>
        </p>
        <p className="text-sm text-gray-500">
          Supported file: doc, docx, image, video, etc...
        </p>
      </div>
    </div>
  );
};