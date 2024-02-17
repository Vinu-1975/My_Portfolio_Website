function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer">
      <div className="container">
        <p>{currentYear} &nbsp; &bull; &nbsp;Vinayakan V S<sup>&copy;</sup></p>
      </div>
    </section>
  );
}

export default Footer;
