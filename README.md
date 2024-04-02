# Themes

## `themes.css`

This file has the CSS variables for the themes. The variables are defined for both light and dark themes.

```css
.theme-orange {
  --background: 0 0% 100%;
  --foreground: 20 14.3% 4.1%;
}

.dark .theme-orange {
  --background: 20 14.3% 4.1%;
  --foreground: 60 9.1% 97.8%;
}

.theme-green {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
}

.dark .theme-green {
  --background: 20 14.3% 4.1%;
  --foreground: 0 0% 95%;
}
```

## `use-theme.ts`

This file defines a shared store for the theme. It uses the `useLocalStorage` (via atomWithStorage) to store the theme in the local storage.

We use a simple string value to store the theme.

## `theme-wrapper.tsx`

Next, we wrap our components in a `<ThemeWrapper />` which reads the theme from the store and applies the CSS variables using a class i.e `theme-orange` or `theme-green`.

## `theme-selector.tsx`

This component displays 3 buttons to set the theme. It uses the `setTheme` method from the store to set the theme.
