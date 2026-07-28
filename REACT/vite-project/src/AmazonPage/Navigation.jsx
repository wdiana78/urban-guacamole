/*
top Navigation of the page
*/

/*
import <name> from "<relative path>";
ensure it's imported before use, and that it's in the src directory
*/
import logo from "./assets/logo.png";

/* component naming rules */
/* null or valid jsx */
function Navigation() {
  return (
    <div>
      <h2>Navigation section</h2>
    </div>
  );
}

/*
export so that any other file can
import the component.
1. Default export: <one major>
*/
export default Navigation;
