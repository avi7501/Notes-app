function Footer() {
  let date = new Date();
  return (
    <footer>
      <h3>Copyright &copy;{date.getFullYear()}</h3>
    </footer>
  );
}

export default Footer;
