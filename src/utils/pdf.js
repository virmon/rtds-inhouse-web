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
            color: "#db6162"
          }
        ]
      },
      {
        text: [
          { text: "Quotation No: ", fontSize: 12, bold: true },
          { text: data.invoice_no, fontSize: 12 },
          { text: data.total_price, fontSize: 12 }
        ],
        margin: [0, 25, 0, 5]
      },
      {
        canvas: [
          {
            type: "rect",
            x: -40,
            y: -40,
            w: 600,
            h: 10,
            color: "#ABD3CC"
          }
        ]
      }
    ],
    defaultStyle: {
      columnGap: 20
    }
  };

  pdfMake.createPdf(docDefinition).download("rtds.pdf");
}
