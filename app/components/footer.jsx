export default function Footer({ hideOnMobile }) {
  const footerClass = hideOnMobile ? 'hidden sm:flex' : 'flex';

  return (
    <footer
      className={`${footerClass} w-full flex-col sm:flex-row items-center justify-between gap-1 px-6 md:px-12 py-5 bg-transparent`}
    >
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        &copy; 2024 Becca Kasdan &middot; All Rights Reserved
      </p>
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        Developed by Crescendo Studios
      </p>
    </footer>
  );
}
