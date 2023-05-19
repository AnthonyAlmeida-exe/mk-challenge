import styled from "styled-components";

export const DropFileWrapper = styled.div`
  width: 100%;
  max-width: 427px;
  border: 2px dashed #205266;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 17px 26px;

  img {
    width: 22px;
    margin-left: 24px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: #404554;
  }

  span {
    font-weight: 400;
    font-size: 12px;
    color: #9ea1b0;
  }
`;

export const DropedFile = styled.div`
  width: 100%;
  max-width: 427px;
  border: 2px dashed #205266;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  padding: 15px 21px;
  margin-bottom: 20px;

  .file-type {
    width: 28px;
    margin-right: 15px;
  }

  p {
    color: #205266;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
  }
  span {
    font-weight: 400;
    font-size: 12px;
    color: #71839b;
    line-height: 16px;
  }
  .file-info {
    flex: 0.95;
  }
  .ctas-wrapper {
    justify-self: flex-end;
    display: flex;
    gap: 10px;

    img {
      cursor: pointer;
    }

    .download {
      transform: rotate(180deg);
    }
  }
`;

export const ModalText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #205266;
  margin-top: 25px;
`;

export const OverSizedFilesWrapper = styled.div`
  width: 100%;
  max-width: 427px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 13px 25px;
  border: 1px solid #e8225f;
  border-radius: 4px;
  margin-bottom: 24px;
  min-height: 71px;

  p {
    font-weight: 500;
    font-size: 14px;
    color: #205266;
    word-break: break-word;
  }

  span {
    font-weight: 600;
    font-size: 12px;
    color: #e8225f;
    align-items: center;
    display: flex;
    gap: 5px;
  }

  .file-type {
    width: 25px;
    margin-right: 16px;
  }

  .refresh-icon {
    justify-self: flex-end;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex: 1;
  }
`;
