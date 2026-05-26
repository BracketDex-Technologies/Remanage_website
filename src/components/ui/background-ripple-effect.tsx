"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

function maxRippleMs(rows: number, cols: number) {
  const maxDist = Math.hypot(rows - 1, cols - 1);
  return maxDist * 6 + 70 + maxDist * 18 + 40;
}

export const BackgroundRippleEffect = ({
  rows = 8,
  cols = 27,
  cellSize = 56,
  gridClassName,
}: {
  rows?: number;
  cols?: number;
  cellSize?: number;
  gridClassName?: string;
}) => {
  const [clickedCell, setClickedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const triggerRipple = useCallback(
    (row: number, col: number) => {
      setClickedCell(null);
      requestAnimationFrame(() => {
        setClickedCell({ row, col });
      });
    },
    []
  );

  useEffect(() => {
    if (clickedCell === null) return;
    const id = window.setTimeout(() => setClickedCell(null), maxRippleMs(rows, cols));
    return () => window.clearTimeout(id);
  }, [clickedCell, rows, cols]);

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 h-full w-full",
        "[--cell-border-color:var(--color-neutral-300)] [--cell-fill-color:var(--color-neutral-100)] [--cell-shadow-color:var(--color-neutral-500)]",
        "dark:[--cell-border-color:var(--color-neutral-700)] dark:[--cell-fill-color:var(--color-neutral-900)] dark:[--cell-shadow-color:var(--color-neutral-800)]",
      )}
    >
      <div className="flex h-full min-h-full w-full items-center justify-center overflow-hidden">
        <DivGrid
          className={gridClassName}
          rows={rows}
          cols={cols}
          cellSize={cellSize}
          borderColor="var(--cell-border-color)"
          fillColor="var(--cell-fill-color)"
          clickedCell={clickedCell}
          onCellClick={triggerRipple}
          interactive
        />
      </div>
    </div>
  );
};

type DivGridProps = {
  className?: string;
  rows: number;
  cols: number;
  cellSize: number; // in pixels
  borderColor: string;
  fillColor: string;
  clickedCell: { row: number; col: number } | null;
  onCellClick?: (row: number, col: number) => void;
  interactive?: boolean;
};

type CellStyle = React.CSSProperties & {
  ["--delay"]?: string;
  ["--duration"]?: string;
};

const DivGrid = ({
  className,
  rows = 7,
  cols = 30,
  cellSize = 56,
  borderColor = "#3f3f46",
  fillColor = "rgba(14,165,233,0.3)",
  clickedCell = null,
  onCellClick = () => {},
  interactive = true,
}: DivGridProps) => {
  const cells = useMemo(
    () => Array.from({ length: rows * cols }, (_, idx) => idx),
    [rows, cols],
  );

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: cols * cellSize,
    height: rows * cellSize,
    marginInline: "auto",
  };

  return (
    <div className={cn("relative z-[3]", className)} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0;
        const delay = clickedCell ? Math.max(0, distance * 6) : 0;
        const duration = 70 + distance * 18;

        const style: CellStyle = clickedCell
          ? {
              "--delay": `${delay}ms`,
              "--duration": `${duration}ms`,
            }
          : {};

        const isRippling = clickedCell !== null;

        return (
          <div
            key={idx}
            className={cn(
              "cell relative cursor-pointer border-[0.5px] opacity-50 transition-opacity duration-150 will-change-[opacity,transform] hover:opacity-90 hover:brightness-125",
              "shadow-[0px_0px_32px_1px_var(--cell-shadow-color)_inset]",
              !interactive && "pointer-events-none",
            )}
            style={{
              backgroundColor: fillColor,
              borderColor: borderColor,
              ...style,
              ...(isRippling
                ? { animation: `cell-ripple ${duration}ms ease-out ${delay}ms 1 both` }
                : { animation: "none" }),
            }}
            onClick={
              interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined
            }
          />
        );
      })}
    </div>
  );
};
