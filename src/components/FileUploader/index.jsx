import "./index.css";

export default function index({ handleFileChange }) {
  function triggerFileUpload() {
    document.getElementById("upfile").click();
  }
  return (
    <div className="file-uploader-container">
      <p id="file-uploader-title">Select a File</p>
      <input
        style={{ margin: "50px 0" }}
        type="file"
        id="upfile"
        name="avatar"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        onChange={handleFileChange}
      />
      <button onClick={triggerFileUpload} htmlFor="avatar">
        Choose a File
      </button>
    </div>
  );
}
