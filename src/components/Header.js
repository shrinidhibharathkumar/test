function Header(props) {
    return (
      <div>
        <h1>
          I am {props.name} working as {props.role}
        </h1>
      </div>
    );
  }
  
  export default Header;
  
  export function Nav() {
    return (
      <div>
        <h1>Nav component</h1>
      </div>
    );
  }
  