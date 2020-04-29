import React from "react";
import PDFViewer from "pdf-viewer-reactjs";

const BatalhaArgumentos = () => {
  return (
    <div>
      <PDFViewer
        document={{
          url: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
        }}
      />
    </div>
  );
};

export default BatalhaArgumentos;
