## Get started

1. Clone Repo

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the app

   ```bash
   npx expo start
   ```

---

## Adjusting Theme Guide

1. Visit this page: [Theme Generator](https://themegenerator.gjermundmyrvang.com/)
2. Create your theme
3. Scroll down to the `globals.css` output
4. Copy **only the colors** from the output and paste them into your `globals.css` in this app using this structure (example):

   ```css
   @layer base {
     :root {
       --background: #fafafa;
       --foreground: #0f172a;
       --card: #ffffff;
       --primary: #4f46e5;
       --muted: #f1f5f9;
       --border: #e2e8f0;
       --destructive: #ff6467;
     }
   }

   @media (prefers-color-scheme: dark) {
     :root {
       --background: #020617;
       --foreground: #f8fafc;
       --card: #0f172a;
       --primary: #6366f1;
       --muted: #1e293b;
       --border: #1e293b;
       --destructive: #ff6467;
     }
   }
   ```

5. Navigate into `tailwind.config.ts` and update the colors here aswell:
   ```ts
      theme: {
         extend: {
            colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
            primary: "var(--primary)",
            card: "var(--card)",
            border: "var(--border)",
            destructive: "var(--destructive)",
            muted: "var(--muted)",
            },
         },
      },
   ```
6. Because some components cant use tailwind colors, also update the `theme/colors.ts` file:

   ```ts
   export const lightColors = {
     background: "#fafafa",
     foreground: "#0f172a",
     card: "#ffffff",
     primary: "#4f46e5",
     muted: "#f1f5f9",
     border: "#e2e8f0",
     destructive: "#ff6467",
   };

   export const darkColors = {
     background: "#020617",
     foreground: "#f8fafc",
     card: "#0f172a",
     primary: "#6366f1",
     muted: "#1e293b",
     border: "#1e293b",
     destructive: "#ff6467",
   };
   ```

7. Now you are good to go, simply use the tailwind tags like `bg-card` in your components and it will automatically detect the phones current theme and apply the correct color:

   ```tsx
   <View className="bg-card rounded-2xl border border-border"></View>
   ```

8. In cases where you cant use tailwind colors, just use the `useTheme()` hook and get the correct colors for the phones current theme:
   ```tsx
   const { colors } = useTheme();
   <Ionicons name="checkmark" size={18} color={colors.foreground} />;
   ```
