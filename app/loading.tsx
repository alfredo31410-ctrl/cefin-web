// app/loading.tsx
export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-[999] flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Spinner Rojo CEFIN */}
        <div className="w-12 h-12 border-4 border-slate-100 border-t-red-600 rounded-full animate-spin mb-4"></div>
        <p className="text-slate-400 font-black uppercase tracking-widest text-[10px] animate-pulse">
          Cargando...
        </p>
      </div>
    </div>
  )
}