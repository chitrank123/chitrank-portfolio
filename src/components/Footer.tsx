const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-paper-rule px-8 md:px-16 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 font-mono text-xs text-paper-dim">
        <p>&copy; {currentYear} Chitrank Tak. All rights reserved.</p>
        <p>
          Built with React &amp; <span className="text-accent font-semibold">Agentic Precision</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
