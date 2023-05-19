import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import pdfFile from "@/assets/pdf-file.svg";
import jpgFile from "@/assets/jpg-file.svg";
import pngFile from "@/assets/png-file.svg";
const maxFileSize = 7000; // 7MB

export interface FileProps {
  file: CustomFile;
  preview?: string;
}

interface CustomFile extends File {
  lastModifiedDate?: string;
  preview?: string;
}

const downloadFile = (file: File) => {
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", file.name);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export function useDocumentRegister() {
  const [files, setFiles] = useState<FileProps[]>([]);
  const [oversizedFiles, setOverSizedFiles] = useState<FileProps[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleDrop = (acceptedFiles: File[]) => {
    setIsUploading(true);
    const updatedFiles = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    const oversizedFiles = updatedFiles.filter(
      (file) => file.file.size > maxFileSize
    );

    if (oversizedFiles.length > 0) {
      setOverSizedFiles((prevFiles) => [...prevFiles, ...oversizedFiles]);
      return;
    }
    setFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
    setIsUploading(false);
  };

  const handleRemoveFile = (file: FileProps) => {
    setFiles((prevFiles) =>
      prevFiles.filter((f) => f.preview !== file.preview)
    );
  };

  const handleDownloadFile = (file: FileProps) => {
    downloadFile(file?.file);
  };

  const handleIconFileType = (type: string) => {
    let fileIcon;

    switch (type) {
      case "application/pdf":
        fileIcon = <img src={pdfFile} className="file-type" />;
        break;
      case "image/jpeg":
        fileIcon = <img src={jpgFile} className="file-type" />;
        break;
      case "image/png":
        fileIcon = <img src={pngFile} className="file-type" />;
        break;
      case "application/msword":
        fileIcon = <img src={jpgFile} className="file-type" />;
        break;
      case "application/vnd.ms-excel":
        fileIcon = <img src={jpgFile} className="file-type" />;
        break;
      default:
        break;
    }
    return fileIcon;
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/pdf": [],
      "application/msword": [],
      "image/jpeg": [".jpeg", ".png"],
      "image/png": [],
      "application/vnd.ms-excel": [],
    },
    onDrop: handleDrop,
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return {
    files,
    oversizedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    handleRemoveFile,
    handleDownloadFile,
    handleIconFileType,
    isUploading,
  };
}
