import React, { useState } from "react";
import axios from "axios";

const HomeTour = () => {
  const [prompt, setPrompt] = useState("");
  const [controlStrength, setControlStrength] = useState(0.6);
  const [selectedFile, setSelectedFile] = useState(null);
  const [outputImage, setOutputImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setError("Please upload an image.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("prompt", prompt);
      formData.append("control_strength", controlStrength);
      formData.append("output_format", "webp");

      // API call
      const response = await axios.post(
        `https://api.stability.ai/v2beta/stable-image/control/sketch`,
        formData,
        {
          responseType: "arraybuffer",
          headers: {
            Authorization: `sk-k5fxvkempbbcJhmwHZV9CRokNpSljOsYagARqj0lfqKLMx4l`, // Replace with your API key
            Accept: "image/*",
          },
        }
      );

      if (response.status === 200) {
        // Create a Blob and convert it to URL to display the image
        const blob = new Blob([response.data], { type: "image/webp" });
        const imageUrl = URL.createObjectURL(blob);
        setOutputImage(imageUrl);
      } else {
        setError(`Error: ${response.status}`);
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1>AI Room Transformer</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="prompt">Enter Prompt:</label>
          <input
            type="text"
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="controlStrength">Control Strength:</label>
          <input
            type="range"
            id="controlStrength"
            min="0"
            max="1"
            step="0.1"
            value={controlStrength}
            onChange={(e) => setControlStrength(e.target.value)}
            style={styles.slider}
          />
          <span>{controlStrength}</span>
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="file">Upload Image:</label>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Transforming..." : "Transform Image"}
        </button>
      </form>

      {outputImage && (
        <div style={styles.result}>
          <h2>Transformed Image:</h2>
          <img src={outputImage} alt="Transformed Room" style={styles.image} />
        </div>
      )}

      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
  },
  slider: {
    width: "100%",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#6a0dad",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
  },
  image: {
    maxWidth: "100%",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  error: {
    color: "red",
    marginTop: "15px",
  },
};

export default HomeTour;
