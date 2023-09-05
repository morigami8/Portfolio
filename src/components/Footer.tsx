const Footer = () => {
  return (
    <footer role="contentinfo">
      <p>
        © {new Date(Date.now()).getFullYear()} by Morgan Atwood. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
