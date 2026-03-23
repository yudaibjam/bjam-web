import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Company name */}
          <div>
            <p className="text-lg font-bold text-white">株式会社b-jam</p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              プライバシーポリシー
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/50">
            © 2024 株式会社b-jam All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
