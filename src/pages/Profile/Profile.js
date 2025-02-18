import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  updateStart,
  updateSuccess,
  updateFailure,
} from "../../redux/user/userSlice";

const Profile = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      setUsername(currentUser.username);
      setEmail(currentUser.email);
      setProfilePicture(currentUser.profilePicture);
    }
  }, [currentUser]);

  const [username, setUsername] = useState(
    currentUser ? currentUser.username : ""
  );
  const [email, setEmail] = useState(currentUser ? currentUser.email : "");
  const [profilePicture, setProfilePicture] = useState(
    currentUser ? currentUser.profilePicture : ""
  );
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    if (file) formData.append("profilePicture", file);

    dispatch(updateStart());

    try {
      const response = await axios.put(
        `http://localhost:5000/api/user/update/${currentUser._id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      dispatch(updateSuccess(response.data));
      alert("Profile updated successfully!");
    } catch (error) {
      dispatch(
        updateFailure(error.response?.data?.message || "Update failed!")
      );
      alert("Update failed!");
    }
  };

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Update Profile</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Profile Picture</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default Profile;
