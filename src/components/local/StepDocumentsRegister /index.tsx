import { FormWrapper } from "../../global/FormWrapper";
import { formatDate } from "@/utils/formatDate";
import { Modal } from "@/components/global/Modal";
import XError from "@/assets/x-error.svg";
import refreshIcon from "@/assets/refresh.svg";
import upload from "@/assets/upload.svg";
import thrash from "@/assets/thrash.svg";

import * as S from "./styles";

import { useState } from "react";
import { FileProps, useDocumentRegister } from "@/hooks/useDocumentRegister";
import { useFormContext } from "@/context/useFormContext";
import { toast } from "react-toastify";

export function StepDocumentsRegister() {
  const {
    files,
    oversizedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    handleRemoveFile,
    handleDownloadFile,
    handleIconFileType,
  } = useDocumentRegister();
  const [openModal, setOpenModal] = useState(false);
  const [fileToRemove, setFileToRemove] = useState<FileProps>();
  const { goToPreviousStep } = useFormContext();

  const handleFinishRegistration = () => {
    toast.success(
      "Registro finalizado, foi redirecionado para a tela inicial!"
    );
    goToPreviousStep();
  };

  return (
    <>
      <FormWrapper
        title={"Anexar arquivos"}
        goBack={goToPreviousStep}
        cta={handleFinishRegistration}
        disabled={files.length === 0}
      >
        <>
          {oversizedFiles?.map(({ file }: FileProps) => (
            <S.OverSizedFilesWrapper>
              {handleIconFileType(file.type)}
              <div>
                <p>{file?.name}</p>
                <span>
                  <img src={XError} className="x-error" />O arquivo é muito
                  grande para upload.
                </span>
              </div>
              <img src={refreshIcon} className="refresh-icon" />
            </S.OverSizedFilesWrapper>
          ))}
          {files.map(({ file, preview }) => (
            <S.DropedFile key={preview}>
              {handleIconFileType(file.type)}
              <div className="file-info">
                <p>{file.name}</p>
                <span>
                  {file.size / 1000} KB, {formatDate(file?.lastModifiedDate)}
                </span>
              </div>
              <div className="ctas-wrapper">
                <img
                  src={upload}
                  className="download"
                  onClick={() => handleDownloadFile({ file, preview })}
                />
                <img
                  src={thrash}
                  onClick={() => {
                    setFileToRemove({ file, preview });
                    setOpenModal(true);
                  }}
                />
              </div>
            </S.DropedFile>
          ))}

          <div
            {...getRootProps()}
            className={`dropzone ${isDragActive ? "active" : ""}`}
          >
            <input {...getInputProps()} />

            <S.DropFileWrapper>
              <div>
                <p>Arraste para dentro ou clique para selecionar um arquivo</p>
                <span>Formatos suportados: PDF, Word, JPG, XLS e PNG</span>
              </div>
              <img src={upload} />
            </S.DropFileWrapper>
          </div>
        </>
      </FormWrapper>
      <Modal
        title="Tem certeza que deseja excluir este arquivo?"
        cta={() => handleRemoveFile(fileToRemove as FileProps)}
        modalIsOpen={openModal}
        closeModal={() => setOpenModal(false)}
      >
        <S.ModalText>
          As mudanças serão salvas e a ação não poderá ser desfeita.
        </S.ModalText>
      </Modal>
    </>
  );
}
