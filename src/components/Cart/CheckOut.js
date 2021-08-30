import classes from "./CheckOut.module.css";

const Checkout = (props) => {
  return (
    <form>
      <div className={classes.control}>
        <label htmlFor="name"> Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="name"> Address </label>
        <input type="text" id="Street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="name"> Postal code</label>
        <input type="numebr" id="Postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="name"> City</label>
        <input type="name" id="Postal" />
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
