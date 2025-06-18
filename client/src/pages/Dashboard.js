// === client/src/pages/Dashboard.js ===
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Auth.css";

function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [file, setFile] = useState(null);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("https://resume-job-tracker.onrender.com/api/jobs", {
      headers: { Authorization: token },
    });
    setJobs(res.data);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("resume", file);
    const uploadRes = await axios.post(
      "https://resume-job-tracker.onrender.com/api/resume/upload",
      formData
    );
    const resumeUrl = uploadRes.data.url;

    const token = localStorage.getItem("token");
    await axios.post(
      "https://resume-job-tracker.onrender.com/api/jobs",
      {
        company,
        role,
        resumeUrl,
      },
      {
        headers: { Authorization: token },
      }
    );

    setCompany("");
    setRole("");
    setFile(null);
    fetchJobs();
  };

  return (
    <div>
      <h2>Job Applications</h2>
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Add Job</button>

      <ul
        style={{
          listStyle: "none",
          padding: "0",
          margin: "0",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {jobs.map((job) => (
          <li
            key={job._id}
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              padding: "20px 24px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)";
              e.target.style.borderColor = "#cbd5e0";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.04)";
              e.target.style.borderColor = "#e2e8f0";
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div
                style={{
                  flex: "1",
                  minWidth: "200px",
                }}
              >
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    color: "#1a202c",
                    marginBottom: "4px",
                    lineHeight: "1.4",
                  }}
                >
                 {`Company: ${job.company}`}
                </div>
                <div
                  style={{
                    fontSize: "0.95rem",
                    color: "#4a5568",
                    marginBottom: "8px",
                    fontWeight: "500",
                  }}
                >
                  {`Role: ${job.role}`}
                </div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    background:
                      job.status === "applied"
                        ? "#e6fffa"
                        : job.status === "interviewing"
                        ? "#fff5e6"
                        : job.status === "offered"
                        ? "#e6ffe6"
                        : job.status === "rejected"
                        ? "#ffe6e6"
                        : "#f0f0f0",
                    color:
                      job.status === "applied"
                        ? "#00a693"
                        : job.status === "interviewing"
                        ? "#d69e2e"
                        : job.status === "offered"
                        ? "#38a169"
                        : job.status === "rejected"
                        ? "#e53e3e"
                        : "#666666",
                    border: `1px solid ${
                      job.status === "applied"
                        ? "#b2f5ea"
                        : job.status === "interviewing"
                        ? "#fbd38d"
                        : job.status === "offered"
                        ? "#c6f6d5"
                        : job.status === "rejected"
                        ? "#fed7d7"
                        : "#e0e0e0"
                    }`,
                  }}
                >
                  {job.status}
                </span>
              </div>

              {job.resumeUrl && (
                <a
                  href={`https://resume-job-tracker.onrender.com${job.resumeUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 16px",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "#ffffff",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    transition: "all 0.2s ease",
                    boxShadow: "0 2px 4px rgba(102, 126, 234, 0.3)",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background =
                      "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)";
                    e.target.style.transform = "scale(1.02)";
                    e.target.style.boxShadow =
                      "0 4px 8px rgba(102, 126, 234, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background =
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow =
                      "0 2px 4px rgba(102, 126, 234, 0.3)";
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10,9 9,9 8,9" />
                  </svg>
                  Resume
                </a>
              )}
            </div>

            {/* Subtle accent line */}
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "3px",
                background:
                  job.status === "applied"
                    ? "#00a693"
                    : job.status === "interviewing"
                    ? "#d69e2e"
                    : job.status === "offered"
                    ? "#38a169"
                    : job.status === "rejected"
                    ? "#e53e3e"
                    : "#cbd5e0",
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
