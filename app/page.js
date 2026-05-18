export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", padding: "20px", background: "#0f172a", color: "white", minHeight: "100vh" }}>
      
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        🚀 AI Tools Hub
      </h1>

      <p style={{ marginBottom: "30px", color: "#94a3b8" }}>
        Találd meg a legjobb ingyenes AI eszközöket egy helyen.
      </p>

      <h2>🔥 Kategóriák</h2>

      <div style={{ display: "grid", gap: "15px", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>

        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px" }}>
          <h3>🎨 Képgenerátorok</h3>
          <a href="https://www.canva.com/ai-image-generator/" target="_blank">Kipróbálom</a>
        </div>

        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px" }}>
          <h3>🎬 Videó AI</h3>
          <a href="https://runwayml.com/" target="_blank">Kipróbálom</a>
        </div>

      </div>

    </main>
  );
}
