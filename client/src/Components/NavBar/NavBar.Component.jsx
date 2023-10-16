import "./NavBar.Styles.css";

const NavBar = ({ handleChange, handleSubmit }) => {
  return (
    <div className="search-box">
      <form onChange={handleChange}>
        <input
          type="search"
          placeholder="Buscar por Id o Nombre"
        />
        <button
          type="submit"
          onClick={handleSubmit}>
          Buscar
        </button>
      </form>
    </div>
  );
};

export default NavBar;
