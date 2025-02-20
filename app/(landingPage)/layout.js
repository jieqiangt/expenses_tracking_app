import "../globals.scss";

export const metadata = {
  title: "My Expenses",
  description: "Just an expense tracking application",
};
export default function LandingPageLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
