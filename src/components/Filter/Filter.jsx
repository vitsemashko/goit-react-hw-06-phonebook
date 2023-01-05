import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFilter } from "../../redux/features/contact/contactSlice";
import css from "./Filter.module.css";
const Filter = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState("");
	const onValueChange = (e) => {
		setValue(e.target.value);
		dispatch(addFilter(e.target.value));
	};
	return (
		<div className={css.filterWrapper}>
			<h2>Find contacts by name</h2>
			<input type="text" value={value} onChange={onValueChange} />
		</div>
	);
};

export default Filter;
