export const createBoard = (height: number, width: number): boolean[][] => {
  const rows = Array(height);
  for (var i = 0; i < height; i++) {
    rows[i] = Array(width).fill(false);
  }
  return rows;
};
