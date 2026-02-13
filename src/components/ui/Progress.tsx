interface ProgressProps {
  value: number; // 0-100
  color?: 'indigo' | 'teal' | 'blue' | 'purple' | 'gray';
  showLabel?: boolean;
  label?: string;
  height?: 'sm' | 'md' | 'lg';
}

export function Progress({ 
  value, 
  color = 'gray', 
  showLabel = true, 
  label = 'Progress',
  height = 'md'
}: ProgressProps) {
  const colorClasses = {
    indigo: 'bg-indigo-500',
    teal: 'bg-teal-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    gray: 'bg-gray-500',
  };

  const heights = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div>
      {showLabel && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-muted-foreground">{label}</span>
          <span className="text-xs font-semibold">{value}%</span>
        </div>
      )}
      <div className={`w-full bg-muted rounded-full ${heights[height]} overflow-hidden`}>
        <div
          className={`${heights[height]} rounded-full transition-all duration-500 ${colorClasses[color]}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
