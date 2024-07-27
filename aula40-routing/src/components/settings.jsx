export function Settings(){
  return(
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="setting-item">
        <label htmlFor="theme-select">Theme:</label>
        <select id="theme-select">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className="setting-item">
        <label htmlFor="language-select">Language:</label>
        <select id="language-select">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="pt">Portuguese</option>
        </select>
      </div>
    </div>
  )
}

