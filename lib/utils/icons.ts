import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";

type IconKey = keyof typeof solidIcons;

export function getValidIcons(): Record<string, IconDefinition> {
  const icons: Record<string, IconDefinition> = {};
  
  (Object.keys(solidIcons) as IconKey[]).forEach((key) => {
    if (key.startsWith('fa') && typeof solidIcons[key] === 'object') {
      const iconName = key.replace(/^fa/, '').toLowerCase();
      const icon = solidIcons[key];
      
      // Type guard to ensure we only add valid icon definitions
      if (isIconDefinition(icon)) {
        icons[iconName] = icon;
      }
    }
  });
  
  return icons;
}

export function isValidIcon(icon: string): boolean {
  return icon in getValidIcons();
}

export function getIconPathData(icon: IconDefinition): string {
  return Array.isArray(icon.icon[4]) ? icon.icon[4].join(' ') : icon.icon[4];
}

// Type guard for IconDefinition
function isIconDefinition(obj: any): obj is IconDefinition {
  return (
    obj &&
    typeof obj === 'object' &&
    Array.isArray(obj.icon) &&
    obj.icon.length === 5 &&
    typeof obj.iconName === 'string' &&
    typeof obj.prefix === 'string'
  );
}