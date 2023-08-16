import "./styles/Sidebar.css";

const Sidebar = ({handlePlace, handleLocations, handleSignUp, handleSignIn}) => {
    return (
        <div className="sidebar">
        <h1><span className="ai">AI</span> <span className="letter-t">T</span>ravels</h1>
        <div className="gpt-buttons">
          <button className='search-place gpt-btn' onClick={handlePlace}><i className="fa-regular fa-map"></i>Instructions</button>
          <button className='gpt-btn' onClick={handleLocations}><i className="fa-solid fa-heart"></i>My Locations</button>
          <button className='gpt-btn' onClick={handleSignUp}><i className="fa-solid fa-user"></i>Sign Up/In</button>
        </div>
        <div className="logo">
          <img className='world' src="/logo.png" alt="3d world map" />
        </div>
      </div>
    )
}

export default Sidebar;