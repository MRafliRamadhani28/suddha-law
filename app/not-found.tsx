import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-suddha-blue flex items-center justify-center">
      <div className="text-center section-padding">
        <div className="font-display font-bold text-[12rem] text-white/5 leading-none select-none mb-8">
          404
        </div>
        <div className="-mt-24 relative z-10">
          <div className="h-1 w-16 bg-suddha-gold mx-auto mb-6" />
          <h1 className="font-display font-bold text-white text-4xl mb-4">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-white/50 text-base mb-10 max-w-md mx-auto">
            Halaman yang Anda cari mungkin sudah dipindahkan atau tidak tersedia.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-suddha-gold text-suddha-blue font-bold px-8 py-4 hover:bg-amber-400 transition-colors"
          >
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
