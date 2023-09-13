export const Filter = ({handleFilterChange, filter}) => {
    return <input
        type="text"
        placeholder="Search contacts.."
        value={filter}
        onChange={handleFilterChange}
      />
}