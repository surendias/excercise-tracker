import "./globals.css";

export const metadata = {
  title: "Excercise Tracker",
  description: "Track your daily exercises",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
