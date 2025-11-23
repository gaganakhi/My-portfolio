export default function Footer() {
    return (
      <footer className="mt-12 text-center text-sm text-slate-500">
        <div>© {new Date().getFullYear()} Gagan N</div>
        <div className="mt-2">
          Built with React & Tailwind
        </div>
      </footer>
    );
  }
  