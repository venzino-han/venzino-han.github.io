// 인쇄/PDF 버튼 동작. 설정값(window.RESUME)은 _layouts/default.html 에서 언어별로 주입됩니다.

function printResume() {
  const printWindow = window.open(window.RESUME.printUrl, "_blank");
  printWindow.onload = function () {
    printWindow.print();
    setTimeout(() => printWindow.close(), 500);
  };
}

function generatePDF() {
  const button = document.getElementById("pdfButton");
  const originalLabel = button.innerHTML;
  button.disabled = true;
  button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>' + window.RESUME.generating;

  const restore = () => {
    button.disabled = false;
    button.innerHTML = originalLabel;
  };

  fetch(window.RESUME.printUrl)
    .then((response) => response.text())
    .then((html) => {
      // 인쇄용 레이아웃(/print/)을 그대로 PDF 로 변환
      const container = document.createElement("div");
      container.innerHTML = html;

      const opt = {
        margin: 10,
        filename: window.RESUME.pdfName,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["css", "legacy"], avoid: ".item" },
      };

      return html2pdf().set(opt).from(container).save();
    })
    .catch((err) => console.error("Error generating PDF:", err))
    .finally(restore);
}
