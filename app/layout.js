import MainHeader from "@/components/main/mainHeader";
import "./globals.scss";

export const metadata = {
  title: "My Expenses",
  description: "Just an expense tracking application",
};
export default function RootLayout({ modal, children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {modal}
        {children}
      </body>
    </html>
  );
}
