import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <h1>404! Looks like you're somewhere you should not be</h1>
      <Link to="/">Go to Home</Link>
    </>
  );
}
export default NotFound;
