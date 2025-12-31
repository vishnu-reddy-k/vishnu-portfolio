import "./globals.css";

export const metadata = {
  title: "Vishnu Reddy | Backend Engineer",
  description: "Portfolio of Vishnu Reddy, a Backend Engineer specializing in Java & Microservices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
