import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactQuill from "react-quill-new"; // Rich text editor
import "react-quill-new/dist/quill.snow.css"; // Quill styling

const ContentManage = () => {
  const [contents, setContents] = useState([]);
  const [newContent, setNewContent] = useState({ title: "", body: "" });
  const [editContent, setEditContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const quillRef = useRef(null);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await axios.get(
          "https://dersim-new-blog-backend.vercel.app/api/contents"
        );
        setContents(response.data);
      } catch (err) {
        setError("Error fetching contents");
      } finally {
        setLoading(false);
      }
    };
    fetchContents();
  }, []);

  const handleCreateContent = async () => {
    if (!newContent.title || !newContent.body) {
      setError("Title and body cannot be empty.");
      return;
    }

    try {
      const response = await axios.post(
        "https://dersim-new-blog-backend.vercel.app/api/contents",
        {
          title: newContent.title,
          body: newContent.body, // Quill content sent as-is
        }
      );
      setContents((prevContents) => [...prevContents, response.data]);
      setNewContent({ title: "", body: "" });
      setError("");
    } catch (err) {
      setError("Error creating content");
    }
  };

  const handleEditContent = async (id) => {
    try {
      const response = await axios.get(
        `https://dersim-new-blog-backend.vercel.app/api/contents/${id}`
      );
      setEditContent(response.data);
    } catch (err) {
      setError("Error fetching content for editing");
    }
  };

  const handleUpdateContent = async () => {
    if (!editContent.title || !editContent.body) {
      setError("Title and body cannot be empty.");
      return;
    }

    try {
      const response = await axios.put(
        `https://dersim-new-blog-backend.vercel.app/api/contents/${editContent._id}`,
        {
          title: editContent.title,
          body: editContent.body, // Quill content sent as-is
        }
      );
      setContents((prevContents) =>
        prevContents.map((content) =>
          content._id === editContent._id ? response.data : content
        )
      );
      setEditContent(null);
      setError("");
    } catch (err) {
      setError("Error updating content");
    }
  };

  const handleDeleteContent = async (id) => {
    if (window.confirm("Are you sure you want to delete this content?")) {
      try {
        await axios.delete(
          `https://dersim-new-blog-backend.vercel.app/api/contents/${id}`
        );
        setContents((prevContents) =>
          prevContents.filter((content) => content._id !== id)
        );
        setError("");
      } catch (err) {
        setError("Error deleting content");
      }
    }
  };

  if (loading) {
    return <div className="text-center">Loading contents...</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Content Management</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="card mb-4">
        <div className="card-header">
          <h3>Add New Content</h3>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <ReactQuill
              value={newContent.title}
              onChange={(value) =>
                setNewContent({ ...newContent, title: value })
              }
              placeholder="Title"
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ list: "ordered" }, { list: "bullet" }],
                  [{ align: [] }],
                  ["bold", "italic", "underline", "strike"],
                  ["blockquote", "code-block"],
                  ["link", "image"],
                  [{ color: [] }, { background: [] }],
                  ["clean"],
                  [{ "line-height": ["1", "1.5", "2", "2.5"] }],
                  [{ size: ["small", "normal", "large", "huge"] }],
                ],
              }}
            />
          </div>
          <ReactQuill
            value={newContent.body}
            onChange={(value) => setNewContent({ ...newContent, body: value })}
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ align: [] }],
                ["bold", "italic", "underline", "strike"],
                ["blockquote", "code-block"],
                ["link", "image"],
                [{ color: [] }, { background: [] }],
                ["clean"],
                [{ "line-height": ["1", "1.5", "2", "2.5"] }],
                [{ size: ["small", "normal", "large", "huge"] }],
              ],
            }}
          />
          <button
            className="btn btn-primary mt-3"
            onClick={handleCreateContent}
          >
            Add Content
          </button>
        </div>
      </div>

      {editContent && (
        <div className="card mb-4">
          <div className="card-header">
            <h3>Edit Content</h3>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <ReactQuill
                value={editContent.title}
                onChange={(value) =>
                  setEditContent({ ...editContent, title: value })
                }
                modules={{
                  toolbar: [
                    [{ header: "1" }, { header: "2" }, { font: [] }],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ align: [] }],
                    ["bold", "italic", "underline", "strike"],
                    ["blockquote", "code-block"],
                    ["link", "image"],
                    [{ color: [] }, { background: [] }],
                    ["clean"],
                    [{ "line-height": ["1", "1.5", "2", "2.5"] }],
                    [{ size: ["small", "normal", "large", "huge"] }],
                  ],
                }}
              />
            </div>
            <ReactQuill
              value={editContent.body}
              onChange={(value) =>
                setEditContent({ ...editContent, body: value })
              }
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ list: "ordered" }, { list: "bullet" }],
                  [{ align: [] }],
                  ["bold", "italic", "underline", "strike"],
                  ["blockquote", "code-block"],
                  ["link", "image"],
                  [{ color: [] }, { background: [] }],
                  ["clean"],
                  [{ "line-height": ["1", "1.5", "2", "2.5"] }],
                  [{ size: ["small", "normal", "large", "huge"] }],
                ],
              }}
            />
            <button
              className="btn btn-success mt-3"
              onClick={handleUpdateContent}
            >
              Update Content
            </button>
          </div>
        </div>
      )}

      <h3 className="text-center mb-3">Contents</h3>
      {contents.length === 0 ? (
        <p className="text-center">No content available yet.</p>
      ) : (
        <ul className="list-group">
          {contents.map((content) => (
            <li className="list-group-item" key={content._id}>
              <h5
                dangerouslySetInnerHTML={{
                  __html: content.title,
                }}
              ></h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: content.body,
                }}
              />
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEditContent(content._id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteContent(content._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContentManage;
