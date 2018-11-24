export function generatePDF(data) {
  const pdfMake = window.pdfMake;

  var docDefinition = {
    content: [
      {
        canvas: [
          {
            type: "rect",
            x: -40,
            y: -40,
            w: 600,
            h: 101,
            color: "black"
          }
        ]
      },
      {
        text: [
          { text: "Quotation No: ", fontSize: 12, bold: true },
          { text: data.invoice_no, fontSize: 12 }
        ],
        margin: [0, 25, 0, 5]
      }
    ],
    defaultStyle: {
      columnGap: 20
    }
  };

  pdfMake.createPdf(docDefinition).download("rtds.pdf");
}
