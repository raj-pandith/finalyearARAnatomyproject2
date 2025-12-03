import "./DownloadButton.css";

const DownloadButton = ({ fileName }) => {

    const downloadHTML = (file) => {
        const link = document.createElement("a");
        link.href = `/notes/${file}`; // Make sure your HTML file is in public folder
        link.download = file;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button className="download-btn" onClick={() => downloadHTML(fileName)}>
            <span className="icon">⬇️</span> Download Notes
        </button>
    );
};

export default DownloadButton;
