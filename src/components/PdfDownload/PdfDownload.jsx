import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';

class PDFDownloadButton extends React.Component {
  downloadPDF = async () => {
    const pdfUrl = '../../assets/mukhles_in_resume_download.pdf';
    const fileName = 'downloaded_file.pdf';

    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Failed to download PDF:', error);
    }
  };

  render() {
    return (
      <button
        onClick={this.downloadPDF}
        className='border-2 border-[#432848] px-5 py-3  text-xl font-medium text-white rounded-xl bg-orange-500 hover:bg-sky-500 hover:border-sky-600 transition duration-300  hover:animate-none flex items-center gap-2 shadow-lg w-[250px] mt-10'
      >
        Download Resume <AiOutlineDownload className='w-6 h-6' />
      </button>
    );
  }
}

export default PDFDownloadButton;