import React, { useState } from "react";

export default function CreatePost() {
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (!content.trim()) return;
    // TODO: submit post
    setContent("");
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: "0 1rem" }}>
      <h2>Create Post</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        rows={4}
        style={{ width: "100%", padding: "0.75rem", fontSize: "1rem", borderRadius: 8, border: "1px solid #ccc", resize: "vertical" }}
      />
      <div style={{ marginTop: "1.25rem", display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={handlePost}
          disabled={!content.trim()}
          style={{
            /* ── Shape ── */
            width: 110,
            height: 110,
            borderRadius: "50%",

            /* ── 3-D dome gradient: bright highlight top-left → deep red bottom-right ── */
            background: "radial-gradient(circle at 38% 32%, #ff4444 0%, #cc1111 45%, #8b0000 100%)",

            /* ── Metallic "base" via box-shadow layers ── */
            boxShadow:
              /* inner highlight (top rim) */
              "inset 0 6px 12px rgba(255,120,120,0.55), " +
              /* inner shadow (bottom rim) */
              "inset 0 -6px 12px rgba(0,0,0,0.45), " +
              /* outer silver-metallic base */
              "0 10px 0 #9e9e9e, " +
              /* soft ambient drop shadow */
              "0 14px 28px rgba(0,0,0,0.45)",

            /* ── Typography ── */
            color: "#ffffff",
            fontSize: "1.35rem",
            fontWeight: 900,
            fontFamily: "'Arial Rounded MT Bold', 'Arial Black', Arial, sans-serif",
            letterSpacing: "0.04em",
            textShadow: "0 1px 3px rgba(0,0,0,0.5)",

            /* ── Reset & misc ── */
            border: "none",
            cursor: "pointer",
            userSelect: "none",
            transition: "transform 0.08s ease, box-shadow 0.08s ease",
          }}
          onMouseDown={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(6px)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "inset 0 6px 12px rgba(255,120,120,0.55), " +
              "inset 0 -4px 10px rgba(0,0,0,0.45), " +
              "0 4px 0 #9e9e9e, " +
              "0 6px 14px rgba(0,0,0,0.4)";
          }}
          onMouseUp={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "";
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "inset 0 6px 12px rgba(255,120,120,0.55), " +
              "inset 0 -6px 12px rgba(0,0,0,0.45), " +
              "0 10px 0 #9e9e9e, " +
              "0 14px 28px rgba(0,0,0,0.45)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "";
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "inset 0 6px 12px rgba(255,120,120,0.55), " +
              "inset 0 -6px 12px rgba(0,0,0,0.45), " +
              "0 10px 0 #9e9e9e, " +
              "0 14px 28px rgba(0,0,0,0.45)";
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
}
