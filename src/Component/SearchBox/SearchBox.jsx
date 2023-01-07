// import styles from "./SearchBox.module.scss";

const SearchBox = ({ placeholder, className, onChangeHandler }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      className={`search-box ${className}`}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
