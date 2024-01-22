import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

const SearchAutocomplete = () => {
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers,setFilteredUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data);

      setUsers(data.users.map((userItem) => userItem.firstName));
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e){
    const query = e.target.value.toLowerCase();
    setSearchParam(query);

    if(query.length > 1){
        const filteredData = users && users.length ?
        users.filter(item => item.toLowerCase().indexOf(query) > -1) : [];

        setFilteredUsers(filteredData);
        setShowDropdown(true);
    }
    else{
        setShowDropdown(false);
    }
  }

  console.log(users,filteredUsers);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="search-autocomplete-container">
      <input
        type="text"
        name="search-users"
        placeholder="Search Users here..."
        onChange={handleChange}
      />
      {
        showDropdown && <Suggestions data={filteredUsers}/>
      }
    </div>
  );
};

export default SearchAutocomplete;
