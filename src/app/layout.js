import { Inter } from "next/font/google";
import "./styles/globals.css";
import NavBar from './components/nav-bar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        <div style={{maxWidth: '1280px', width: '100%'}}>
          <NavBar/>
          {children}
        </div>
      </body>
    </html>
  );
}
