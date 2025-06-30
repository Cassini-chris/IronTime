'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Time = { h: number; m: number; s: number };

interface TimeInputGroupProps {
  label?: string;
  icon?: React.ReactNode;
  time: Time;
  setTime: (time: Time) => void;
}

export function TimeInputGroup({
  label,
  icon,
  time,
  setTime,
}: TimeInputGroupProps) {
  const handleInputChange = (field: keyof Time, value: string) => {
    let numericValue = parseInt(value, 10);
    if (isNaN(numericValue)) {
      numericValue = 0;
    }

    let clampedValue = numericValue;
    if (field === 'm' || field === 's') {
      clampedValue = Math.max(0, Math.min(59, numericValue));
    } else {
      clampedValue = Math.max(0, numericValue);
    }

    setTime({ ...time, [field]: clampedValue });
  };

  return (
    <div className="space-y-2">
      {label && icon && (
        <Label className="flex items-center gap-2 text-lg font-medium">
          {icon}
          {label}
        </Label>
      )}
      <div className="flex items-center gap-2">
        <Input
          type="number"
          value={String(time.h).padStart(2, '0')}
          onFocus={(e) => e.target.select()}
          onChange={(e) => handleInputChange('h', e.target.value)}
          placeholder="HH"
          aria-label={`${label || 'Time'} hours`}
          min="0"
          className="font-mono text-center"
        />
        <span className="font-bold text-muted-foreground">:</span>
        <Input
          type="number"
          value={String(time.m).padStart(2, '0')}
          onFocus={(e) => e.target.select()}
          onChange={(e) => handleInputChange('m', e.target.value)}
          placeholder="MM"
          aria-label={`${label || 'Time'} minutes`}
          min="0"
          max="59"
          className="font-mono text-center"
        />
        <span className="font-bold text-muted-foreground">:</span>
        <Input
          type="number"
          value={String(time.s).padStart(2, '0')}
          onFocus={(e) => e.target.select()}
          onChange={(e) => handleInputChange('s', e.target.value)}
          placeholder="SS"
          aria-label={`${label || 'Time'} seconds`}
          min="0"
          max="59"
          className="font-mono text-center"
        />
      </div>
    </div>
  );
}
