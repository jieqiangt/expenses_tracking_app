import MainHeader from "@/components/main/mainHeader";
import "./globals.scss";

export const metadata = {
  title: "My Expenses",
  description: "Just an expense tracking application",
};

MainHeader;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
