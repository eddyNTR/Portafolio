// =============================================================================
// ProgressBar.tsx
// Barra de progreso reutilizable con ícono, nombre y porcentaje.
// Se usa en la sección de Habilidades para mostrar el nivel de cada skill.
// =============================================================================

interface ProgressBarProps {
  icon: string;    // Emoji representativo del skill
  name: string;    // Nombre de la tecnología
  level: number;   // Porcentaje de nivel (0-100)
}

const ProgressBar = ({ icon, name, level }: ProgressBarProps) => {
  return (
    <div>
      {/* Fila superior: ícono + nombre a la izquierda, porcentaje a la derecha */}
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          <span>{icon}</span>
          <span className="text-gray-300 font-medium text-sm">{name}</span>
        </div>
        <span className="text-primary-light text-sm font-semibold">{level}%</span>
      </div>

      {/* Pista de la barra (fondo gris) */}
      <div className="w-full bg-slate-700 rounded-full h-2">
        {/* Relleno dinámico: el ancho se calcula con el prop `level` */}
        <div
          className="h-2 rounded-full bg-linear-to-r from-primary to-primary-light transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
