import { useEffect } from 'react';
import { Icon } from '@iconify/react';

interface Props {
  title: string;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (i: number) => void;
}

// ── Sub-componentes ──────────────────────────────────────────────────────────

const Dots = ({ images, current, onSelect }: { images: string[]; current: number; onSelect: (i: number) => void }) => (
  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
    {images.map((_, i) => (
      <button
        key={i}
        onClick={() => onSelect(i)}
        style={{
          transition: 'all 0.3s ease',
          background: i === current ? '#a78bfa' : 'rgba(255,255,255,0.35)',
          width: i === current ? '18px' : '6px',
          height: '5px',
          borderRadius: '999px',
        }}
      />
    ))}
  </span>
);

const NavBtn = ({ dir, onClick }: { dir: 'left' | 'right'; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`absolute ${dir === 'left' ? 'left-2' : 'right-2'} top-1/2 -translate-y-1/2 bg-black/60 hover:bg-primary/70 border border-white/10 text-white rounded-full p-2 transition-all duration-200`}
  >
    <Icon icon={`lucide:chevron-${dir}`} width={18} height={18} />
  </button>
);

const KbdHint = ({ keys, label }: { keys: string[]; label: string }) => (
  <div className="flex items-center gap-2 text-gray-500 text-xs">
    {keys.map((k) => (
      <span key={k} className="border border-gray-600 text-gray-400 rounded px-1.5 py-0.5 font-mono text-[10px]">{k}</span>
    ))}
    <span className="text-gray-600">{label}</span>
  </div>
);

// ── Componente principal ─────────────────────────────────────────────────────

const ProjectGalleryModal = ({ title, images, currentIndex, onClose, onPrev, onNext, onSelect }: Props) => {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const multiImage = images.length > 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-7xl rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          boxShadow: '0 0 0 1px rgba(124,58,237,0.35), 0 25px 60px rgba(124,58,237,0.25), 0 8px 32px rgba(0,0,0,0.6)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Acento superior */}
        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-primary to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="shrink-0 bg-primary/20 border border-primary/40 rounded-lg p-1.5">
              <Icon icon="lucide:layout-template" width={16} height={16} className="text-primary-light" />
            </div>
            <div className="min-w-0">
              <h3 className="text-white font-bold text-sm sm:text-base truncate leading-tight">{title}</h3>
              <p className="text-primary-light text-xs mt-0.5 hidden sm:block">Vista previa del proyecto</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 ml-4">
            {multiImage && (
              <span className="flex items-center gap-1.5 bg-primary/15 border border-primary/30 text-primary-light text-xs font-semibold px-3 py-1 rounded-full">
                <Icon icon="lucide:images" width={12} height={12} />
                {currentIndex + 1} / {images.length}
              </span>
            )}
            <button
              onClick={onClose}
              className="bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 text-gray-400 hover:text-white transition-all duration-200 p-1.5 rounded-lg"
            >
              <Icon icon="lucide:x" width={16} height={16} />
            </button>
          </div>
        </div>

        <div className="h-px mx-4 sm:mx-5 bg-linear-to-r from-transparent via-primary/20 to-transparent" />

        {/* Vista móvil */}
        <div className="block sm:hidden mx-4 my-4 rounded-xl overflow-hidden relative" style={{ height: '56vw', minHeight: '220px', maxHeight: '420px' }}>
          <img src={images[currentIndex]} alt={`${title} ${currentIndex + 1}`} className="w-full h-full object-contain" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(124,58,237,0.4) 0%, transparent 55%)' }} />
          {multiImage && <><NavBtn dir="left" onClick={onPrev} /><NavBtn dir="right" onClick={onNext} /></>}
          {multiImage && <Dots images={images} current={currentIndex} onSelect={onSelect} />}
        </div>

        {/* Vista desktop — acordeón */}
        <div className="hidden sm:flex mx-5 my-4 rounded-xl overflow-hidden" style={{ height: 'clamp(320px, 62vh, 700px)' }}>
          {images.map((img, i) => {
            const active = i === currentIndex;
            return (
              <button
                key={i}
                onClick={() => onSelect(i)}
                style={{ flex: active ? 5 : 1, transition: 'flex 0.5s cubic-bezier(0.4,0,0.2,1)', minWidth: 0 }}
                className="relative overflow-hidden focus:outline-none"
              >
                <img
                  src={img}
                  alt={`${title} ${i + 1}`}
                  className={`absolute inset-0 w-full h-full ${active ? 'object-contain' : 'object-cover'}`}
                  style={{ transition: 'opacity 0.4s ease, filter 0.4s ease', opacity: active ? 1 : 0.5, filter: active ? 'none' : 'grayscale(30%)' }}
                />
                <div className="absolute inset-0" style={{ background: active ? 'linear-gradient(to top, rgba(124,58,237,0.35) 0%, transparent 50%)' : 'rgba(0,0,0,0.4)' }} />
                {i < images.length - 1 && <span className="absolute right-0 top-0 h-full z-10" style={{ width: '2px', background: 'rgba(124,58,237,0.5)' }} />}
                {!active && (
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
                    <Icon icon="lucide:camera" width={13} height={13} className="text-white/70" />
                    <span className="text-white/60 text-[10px] font-bold">{i + 1}</span>
                  </span>
                )}
                {active && multiImage && <Dots images={images} current={currentIndex} onSelect={onSelect} />}
              </button>
            );
          })}
        </div>

        {/* Footer atajos — solo desktop */}
        <div className="hidden sm:flex items-center justify-between px-5 pb-4">
          <KbdHint keys={['←', '→']} label="para navegar" />
          <KbdHint keys={['Esc']} label="para cerrar" />
        </div>

        <div className="block sm:hidden h-3" />

        {/* Brillo decorativo */}
        <div className="absolute top-0 right-0 pointer-events-none" style={{ width: '180px', height: '180px', background: 'radial-gradient(circle at top right, rgba(124,58,237,0.15), transparent 70%)' }} />
      </div>
    </div>
  );
};

export default ProjectGalleryModal;
