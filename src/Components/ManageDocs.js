import "../Styles/ManageDocs.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import { requestDocs } from "../Api";
function ManageDocs() {
  const [docs, setDocs] = useState([]);
  const [documents, setDocuments] = useState("")


  const getDocsApi = async() => {
    const response = await requestDocs();
    setDocs(response.data)
  }


  // useEffect(() => {
  //   getDocsApi(); 
  // },[])


  const handleUpload = async (e) => {
    setDocuments(URL.createObjectURL(e.target.files[0]));
  };
console.log(documents)

    return (
      <section className="display-flex">
        <SideBar />
        <section className="docs-container-space">
          {/*   managing docs */}
          <div className="manage-docs-search-box">
            <h4>Manage Docs</h4>
            <p>File Upload</p>
            <input type="file" className="input-file" onChange={handleUpload} />
          </div>
          {/*   list of uplaoded documents */}
          <div className="manage-docs-search-box">
            <h4>uploaded list of docs</h4>

            <div className="scroll">
              <table>
                {docs.map((docs, index) => (
                  <tr>
                    <td>{index} </td>
                    <td>{docs.name}</td>
                    <td>{docs.path}</td>
                    <td>{docs.dbfilepath}</td>
                    <td>
                      <FontAwesomeIcon icon={faRemove} />
                    </td>
                  </tr>
                ))}

                <tr>
                  <th>Sr. No</th>
                  <th>Name</th>
                  <th>PDF File Path</th>
                  <th>Vector DB File Path</th>
                  <th>Actions</th>
                </tr>
                <tr>
                  <td>Peter </td>
                  <td>Griffin</td>
                  <td>Peter</td>
                  <td>Griffin</td>
                  <td>
                    <FontAwesomeIcon icon={faRemove} />
                  </td>
                </tr>
                <tr>
                  <td>Peter </td>
                  <td>Griffin</td>
                  <td>Peter</td>
                  <td>Griffin</td>
                  <td>
                    <FontAwesomeIcon icon={faRemove} />
                  </td>
                </tr>
                <tr>
                  <td>Peter </td>
                  <td>Griffin</td>
                  <td>Peter</td>
                  <td>Griffin</td>
                  <td>
                    <FontAwesomeIcon icon={faRemove} />
                  </td>
                </tr>
              </table>
            </div>
          </div>{" "}
        </section>
      </section>
    );
}

export default ManageDocs;