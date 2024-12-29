export function getTailwindGradient(element: HTMLElement): string[] | null {
  const style = window.getComputedStyle(element);
  const background = style.backgroundImage;

  console.log(background);

  // Check if it's a gradient
  if (!background.includes('linear-gradient')) {
    return null;
  }

  // Extract colors from linear-gradient
  // Example: linear-gradient(to right, rgb(59, 130, 246), rgb(147, 51, 234))
  const colors = background.match(/rgba?\([^)]+\)|#[a-f\d]{3,8}/gi);
  
  if (!colors || colors.length < 2) {
    return null;
  }

  return colors;
}