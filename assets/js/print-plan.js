var page_section, HTML_Width, HTML_Height, top_left_margin, PDF_Width, PDF_Height, 
canvas_image_width, canvas_image_height;

function calculatePDF_height_width(selector, index) {
    page_section = $(selector).eq(index);
    HTML_Width = page_section.width();
    HTML_Height = page_section.height();
    top_left_margin = 15;
    PDF_Width = HTML_Width + (top_left_margin * 2);
    PDF_Height = (PDF_Width * 1.2) + (top_left_margin * 2);
    canvas_image_width = HTML_Width;
    canvas_image_height = HTML_Height;
}


$("#downloadSpPDF").click(function() {
    var pdfDocument = new jsPDF('p', 'pt', 'a3', true);
    html2canvas($("#container"), {
        onrendered: function(canvas) {
            calculatePDF_height_width("#container", 2);

            var imgData = canvas.toDataURL("image/png", 1.0);
            pdfDocument.addImage(imgData, 'JPG', 50, 50, 650, 0);

            setTimeout(function() {

                //Save PDF Doc  
                pdfDocument.save("HTML-Document.pdf");

                //Generate BLOB object
                // var blob = pdfDocument.output("blob");

                //Getting URL of blob object
                // var blobURL = URL.createObjectURL(blob);

                //Showing PDF generated in iFrame element
                // var iframe = document.getElementById('iFrame-pdf-container');
                // iframe.src = blobURL;

                //Setting download link
                // var downloadLink = document.getElementById('downloadSpPDF');
                // downloadLink.href = blobURL;

                // $("#sample-pdf").slideDown();

            }, 0);
        }
    });
});